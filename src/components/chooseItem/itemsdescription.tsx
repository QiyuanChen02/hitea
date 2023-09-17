import { useRouter } from "next/router";
import { useState } from "react";
import { useCartStore } from "~/hooks/zustand/useCart";
import type { OrderType, TeaType } from "~/utils/milkTeaData";
import ActionButton from "../utils/actionbutton";
import OrderDetailSelection from "../utils/orderdetailselection";

const ItemsDescription: React.FC<TeaType> = ({
  id,
  name,
  initialPrice,
  description,
  image,
}) => {
  const { items, addItem, increaseQuantity } = useCartStore();
  const router = useRouter();

  const [order, setOrder] = useState<OrderType>({
    quantity: 1,
    extraPrice: 0,
    size: "medium",
    sweetness: "1",
    ice: "normal",
    specialInstructions: "",
    hasTea: Math.floor(id / 100) === 2 ? "With Green Tea" : undefined,
  });

  const changeOrder = <T extends keyof OrderType>(
    key: T,
    value: T extends "quantity" | "extraPrice" ? number : string
  ) => {
    setOrder((order) => ({ ...order, [key]: value }));
  };

  const onCheckout = async () => {
    if (!items.find((item) => item.id === id)) {
      addItem({
        id,
        name,
        initialPrice,
        description,
        image,
        ...order,
      });
    } else {
      increaseQuantity(id, order.quantity);
    }
    await router.push("/checkout");
  };

  return (
    <div className="flex w-full flex-col items-start gap-3 p-2 md:w-1/2">
      <h1 className="text-3xl">{name}</h1>
      <p className="text-lg">£{(initialPrice / 100).toFixed(2)}</p>
      <p>{description}</p>
      <OrderDetailSelection order={order} changeOrder={changeOrder} />
      <ActionButton onClick={() => void onCheckout()}>
        Add {order.quantity} to order |{" £"}
        {(((initialPrice + order.extraPrice) * order.quantity) / 100).toFixed(
          2
        )}
      </ActionButton>
    </div>
  );
};

export default ItemsDescription;
