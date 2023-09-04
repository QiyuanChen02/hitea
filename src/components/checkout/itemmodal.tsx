import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "~/hooks/zustand/useCart";
import { useModalStore } from "~/hooks/zustand/useModal";
import IconButton from "../utils/iconbutton";
import Modal from "../utils/modal";
import ActionButton from "../utils/actionbutton";
import { type ParsedItemType } from "~/utils/milkTeaData";
import RadioSelection from "../utils/radioselection";
import OrderDetails from "../utils/orderdetails";
import { OrderOptions } from "../chooseItem/itemsdescription";

type ItemModalType = {
  item: ParsedItemType;
};

const ItemModal: React.FC<ItemModalType> = ({ item }) => {
  const { id, name, description, image, price } = item;
  const { updateOrder, deleteItem } = useCartStore();

  const [order, setOrder] = useState({
    size: item.size,
    ice: item.ice,
    sweetness: item.sweetness,
    quantity: item.quantity,
  });

  const changeOrder = <T extends OrderOptions>(
    key: T,
    value: T extends "quantity" ? number : string
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
        <p className="text-lg">£{(price / 100).toFixed(2)}</p>
        <p className="text-xl">{description}</p>

        <OrderDetails order={order} changeOrder={changeOrder} />
        <ActionButton onClick={() => onUpdate()}>
          Update Order |{" £"}
          {((price * order.quantity) / 100).toFixed(2)}
        </ActionButton>
        <button className="text-red-500" onClick={() => deleteItem(id)}>
          Delete Order
        </button>
      </div>
    </Modal>
  );
};

export default ItemModal;
