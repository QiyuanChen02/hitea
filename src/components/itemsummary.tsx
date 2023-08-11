import Image from "next/image";
import { useToggle } from "~/hooks/useToggle";
import { type ParsedItemType } from "~/pages/items/[id]";
import ItemInfo from "./iteminfo";

const ItemSummary: React.FC<ParsedItemType> = (item) => {
  const { name, image, price, quantity } = item;

  const [showModal, toggleShowModal] = useToggle(false);

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
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen">
      <div
        onClick={toggleShowModal}
        className="absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-50"
      />
      <ItemInfo item={item} toggleShowModal={toggleShowModal} />
    </div>
  );
};

export default ItemSummary;
