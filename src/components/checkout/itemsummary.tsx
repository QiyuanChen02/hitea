import Image from "next/image";
import { useDomLoaded } from "~/hooks/utils/useDomLoaded";
import { useModalStore } from "~/hooks/zustand/useModal";
import { type ParsedItemType } from "~/pages/items/[id]";
import ItemModal from "./itemmodal";

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

export default ItemSummary;