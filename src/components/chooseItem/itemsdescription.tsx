import { useRouter } from "next/router";
import { useState } from "react";
import { useCartStore } from "~/hooks/zustand/useCart";
import { type TeaType } from "~/utils/milkTeaData";
import ActionButton from "../utils/actionbutton";

const ItemsDescription: React.FC<TeaType> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  const { items, addItem, increaseQuantity } = useCartStore();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(1);

  const onCheckout = async () => {
    if (!items.find((item) => item.id === id)) {
      addItem({
        id,
        name,
        price,
        description,
        image,
        quantity: selectedOption,
      });
    } else {
      increaseQuantity(id, selectedOption);
    }
    await router.push("/checkout");
  };

  return (
    <div className="flex w-full flex-col items-start gap-3 p-2 md:w-1/2">
      <h1 className="text-3xl">{name}</h1>
      <p className="text-lg">£{(price / 100).toFixed(2)}</p>
      <p>{description}</p>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(parseInt(e.target.value))}
        className="rounded-full bg-gray-300 px-4 py-2"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <ActionButton onClick={() => void onCheckout()}>
        Add {selectedOption} to order |{" £"}
        {((price * selectedOption) / 100).toFixed(2)}
      </ActionButton>
    </div>
  );
};

export default ItemsDescription;
