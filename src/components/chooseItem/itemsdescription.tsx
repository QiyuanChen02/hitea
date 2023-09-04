import { useRouter } from "next/router";
import { useState } from "react";
import { useCartStore } from "~/hooks/zustand/useCart";
import {
  IceType,
  OrderType,
  SizeType,
  SweetnessType,
  type TeaType,
} from "~/utils/milkTeaData";
import ActionButton from "../utils/actionbutton";
import RadioSelection from "../utils/radioselection";
import OrderDetails from "../utils/orderdetails";

const defaultOrder: OrderType = {
  quantity: 1,
  size: "normal",
  sweetness: "1",
  ice: "normal",
  specialInstructions: "",
};

export type OrderOptions = keyof typeof defaultOrder;

const ItemsDescription: React.FC<TeaType> = ({
  id,
  name,
  price,
  description,
  image,
}) => {
  const { items, addItem, increaseQuantity } = useCartStore();
  const router = useRouter();

  const [order, setOrder] = useState(defaultOrder);

  const changeOrder = <T extends OrderOptions>(
    key: T,
    value: T extends "quantity" ? number : string
  ) => {
    setOrder((order) => ({ ...order, [key]: value }));
  };

  const onCheckout = async () => {
    if (!items.find((item) => item.id === id)) {
      addItem({
        id,
        name,
        price,
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
      <p className="text-lg">£{(price / 100).toFixed(2)}</p>
      <p>{description}</p>
      <OrderDetails order={order} changeOrder={changeOrder} />
      <ActionButton onClick={() => void onCheckout()}>
        Add {order.quantity} to order |{" £"}
        {((price * order.quantity) / 100).toFixed(2)}
      </ActionButton>
    </div>
  );
};

export default ItemsDescription;
