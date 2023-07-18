import { useRouter } from "next/router";
import { useState } from "react";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { type ParsedItemType } from "~/pages/items/[id]";
import { type TeaType } from "~/utils/milkTeaData";

const ItemsDescription: React.FC<TeaType> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(1);

  const items = useLocalStorage<ParsedItemType[]>([], "items");

  const onCheckout = async () => {
    // gets the current items from local storage
    let parsedItems: ParsedItemType[] = [];
    parsedItems = items ? items : [];

    // adds the new item to the list of items if it's new otherwise it updates the quantity
    if (!parsedItems.find((item) => item.id === id)) {
      parsedItems.push({
        id,
        name,
        price,
        description,
        image,
        quantity: selectedOption,
      });
    } else {
      parsedItems = parsedItems.map((item) => {
        return {
          ...item,
          quantity:
            item.id === id ? item.quantity + selectedOption : item.quantity,
        };
      });
    }

    localStorage.setItem("items", JSON.stringify(parsedItems));
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
      <button
        className="rounded-lg bg-black p-3 text-lg text-white"
        onClick={() => void onCheckout()}
      >
        Add {selectedOption} to order |{" £"}
        {((price * selectedOption) / 100).toFixed(2)}
      </button>
    </div>
  );
};

export default ItemsDescription;
