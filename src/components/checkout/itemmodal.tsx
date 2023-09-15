import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "~/hooks/zustand/useCart";
import { useModalStore } from "~/hooks/zustand/useModal";
import { type ParsedItemType } from "~/utils/milkTeaData";
import { type OrderOptions } from "../chooseItem/itemsdescription";
import ActionButton from "../utils/actionbutton";
import Modal from "../utils/modal";
import OrderDetailSelection from "../utils/orderdetailselection";

type ItemModalType = {
  item: ParsedItemType;
};

const ItemModal: React.FC<ItemModalType> = ({ item }) => {
  const { id, name, description, image, initialPrice, ...initialOrder } = item;
  const { updateOrder, deleteItem } = useCartStore();

  const [order, setOrder] = useState(initialOrder);

  const changeOrder = <T extends OrderOptions>(
    key: T,
    value: T extends "quantity" | "extraPrice" ? number : string
  ) => {
    setOrder((order) => ({ ...order, [key]: value }));
  };

  const { hideModal } = useModalStore();

  const onUpdate = () => {
    updateOrder(id, order);
    hideModal(id);
  };

  return (
    <Modal id={id}>
      <figure className="relative h-1/4 w-full">
        <Image
          src={`/hiteadrinks/${image}`}
          alt={"photo of " + name}
          fill
          className="object-contain"
        />
      </figure>
      <div className="flex w-full flex-col items-start gap-3 overflow-y-scroll  p-2">
        <h1 className="text-3xl">{name}</h1>
        <p className="text-lg">
          £{((initialPrice + order.extraPrice) / 100).toFixed(2)}
        </p>
        <p className="text-xl">{description}</p>

        <OrderDetailSelection order={order} changeOrder={changeOrder} />
        <ActionButton onClick={() => onUpdate()}>
          Update Order |{" £"}
          {(((initialPrice + order.extraPrice) * order.quantity) / 100).toFixed(
            2
          )}
        </ActionButton>
        <button className="text-red-500" onClick={() => deleteItem(id)}>
          Delete Order
        </button>
      </div>
    </Modal>
  );
};

export default ItemModal;
