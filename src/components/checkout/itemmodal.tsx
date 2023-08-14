import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "~/hooks/zustand/useCart";
import { useModalStore } from "~/hooks/zustand/useModal";
import { type ParsedItemType } from "~/pages/items/[id]";
import IconButton from "../utils/iconbutton";
import Modal from "../utils/modal";

type ItemModalType = {
  item: ParsedItemType;
};

const ItemModal: React.FC<ItemModalType> = ({ item }) => {
  const { id, name, description, image, price, quantity } = item;
  const { updateQuantity, deleteItem } = useCartStore();
  const [newQuantity, setNewQuantity] = useState(quantity);

  const { hideModal } = useModalStore();

  const onUpdate = () => {
    updateQuantity(id, newQuantity);
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
      <div className="flex w-full flex-col items-start gap-3 p-2">
        <h1 className="text-3xl">{name}</h1>
        <p className="text-lg">£{(price / 100).toFixed(2)}</p>
        <p className="text-xl">{description}</p>
        <button className="text-red-500" onClick={() => deleteItem(id)}>
          Delete Order
        </button>
        <div className="flex items-center gap-3">
          <IconButton
            imageSrc="icons/minus.svg"
            altText="minus"
            width={24}
            height={24}
            spacing={8}
            extraClasses="bg-gray-300 rounded-full"
            onClick={() =>
              setNewQuantity((updatedQuantity) => updatedQuantity - 1)
            }
          />
          <p>{newQuantity}</p>
          <IconButton
            imageSrc="icons/plus.svg"
            altText="minus"
            width={24}
            height={24}
            spacing={8}
            extraClasses="bg-gray-300 rounded-full"
            onClick={() =>
              setNewQuantity((updatedQuantity) => updatedQuantity + 1)
            }
          />
          <button
            className="rounded-lg bg-black p-3 text-lg text-white"
            onClick={() => onUpdate()}
          >
            Update Order |{" £"}
            {((price * newQuantity) / 100).toFixed(2)}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ItemModal;
