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
import ActionButton from "./actionbutton";
import RadioSelection, { ChangeOrderType } from "./radioselection";

const defaultOrder: OrderType = {
  quantity: 1,
  size: "normal",
  sweetness: "1",
  ice: "normal",
  specialInstructions: "",
};

export type OrderOptions = keyof typeof defaultOrder;

type OrderDetailsType = {
  order: OrderType;
  changeOrder: ChangeOrderType;
};

const OrderDetails: React.FC<OrderDetailsType> = ({ order, changeOrder }) => {
  return (
    <div className="flex w-full flex-col items-start gap-3 p-2 md:w-1/2">
      <h2 className="text-xl">Choice of Size</h2>

      <RadioSelection
        order={order}
        changeOrder={changeOrder}
        type="size"
        options={["large", "normal"]}
      />

      <h2 className="text-xl">Choice of Ice</h2>
      <RadioSelection
        order={order}
        changeOrder={changeOrder}
        type="ice"
        options={["normal", "half", "none"]}
      />

      <h2 className="text-xl">Choice of Sweetness</h2>
      <RadioSelection
        order={order}
        changeOrder={changeOrder}
        type="sweetness"
        options={["1", "0.7", "0.5", "0.3"]}
      />

      <select
        value={order.quantity}
        onChange={(e) => changeOrder("quantity", parseInt(e.target.value))}
        className="rounded-full bg-gray-300 px-4 py-2"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </div>
  );
};

export default OrderDetails;
