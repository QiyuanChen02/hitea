import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "~/hooks/useCart";
import { useToggle } from "~/hooks/useToggle";
import { type ParsedItemType } from "~/pages/items/[id]";
import IconButton from "./iconbutton";

type ItemSummaryType = {
  item: ParsedItemType;
};

const ItemSummary: React.FC<ItemSummaryType> = ({ item }) => {
  const [showModal, toggleShowModal] = useToggle(false);
  const { image, name, quantity, price } = item;

  return (
    <>
      <div
        className="flex w-full items-center justify-between border hover:cursor-pointer"
        onClick={toggleShowModal}
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
      {showModal && <ItemModal item={item} toggleShowModal={toggleShowModal} />}
    </>
  );
};

type ItemModalType = {
  item: ParsedItemType;
  toggleShowModal: () => void;
};

const ItemModal: React.FC<ItemModalType> = ({ item, toggleShowModal }) => {
  const { id, name, description, price, quantity } = item;
  const { updateQuantity } = useCartStore();
  const [newQuantity, setNewQuantity] = useState(quantity);

  const onUpdate = () => {
    updateQuantity(id, newQuantity);
    toggleShowModal();
  };

  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen">
      <div
        onClick={toggleShowModal}
        className="absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-50"
      />
      <div className="center flex h-full w-full flex-col bg-white p-5 md:h-4/5 md:w-1/2">
        <div onClick={toggleShowModal}>
          <IconButton
            imageSrc="icons/close.svg"
            altText="close tab"
            width={24}
            height={24}
          />
        </div>
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
      </div>
    </div>
  );
};

export default ItemSummary;
