import Image from "next/image";
import { useEffect, useState } from "react";
import { useCartStore } from "~/hooks/zustand/useCart";
import { useModalStore } from "~/hooks/zustand/useModal";
import { type ParsedItemType } from "~/pages/items/[id]";
import IconButton from "../utils/iconbutton";
import Modal from "../utils/modal";
import { useDomLoaded } from "~/hooks/utils/useDomLoaded";

type ItemSummaryType = {
  item: ParsedItemType;
};

const ItemSummary: React.FC<ItemSummaryType> = ({ item }) => {
  const { image, name, quantity, price } = item;
  const { showModal, checkoutUpdateModals } = useModalStore();

  const domLoaded = useDomLoaded();
  if (!domLoaded) return;
  return (
    <>
      <div
        className="flex w-full items-center justify-between border hover:cursor-pointer"
        onClick={() => showModal(item.id)}
      >
        <div className="flex items-center gap-2">
          <figure className="relative flex h-24 w-24">
            <Image
              className="center"
              src={`/hiteadrinks/${image}`}
              alt={name}
              width={96}
              height={96}
            />
            <div className="absolute right-2 top-2 h-5 w-5 rounded-full border bg-pink-200">
              <p className="translate-y-[-4px] text-center">{quantity}</p>
            </div>
          </figure>
          <p className="w-64">{name}</p>
        </div>
        <p className="w-16 font-bold">
          £{((quantity * price) / 100).toFixed(2)}
        </p>
      </div>
      {checkoutUpdateModals.includes(item.id.toString()) && (
        <ItemModal item={item} />
      )}
    </>
  );
};

type ItemModalType = {
  item: ParsedItemType;
};

const ItemModal: React.FC<ItemModalType> = ({ item }) => {
  const { id, name, description, price, quantity } = item;
  const { updateQuantity } = useCartStore();
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
          src={`/hiteadrinks/${item.image}`}
          alt={"photo of " + item.name}
          fill
          className="object-contain"
        />
      </figure>
      <div className="flex w-full flex-col items-start gap-3 p-2">
        <h1 className="text-3xl">{name}</h1>
        <p className="text-lg">£{(price / 100).toFixed(2)}</p>
        <p>{description}</p>
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

export default ItemSummary;
