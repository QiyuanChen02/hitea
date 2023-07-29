import Image from "next/image";
import { type ParsedItemType } from "~/pages/items/[id]";

const ItemSummary: React.FC<ParsedItemType> = ({ name, image, quantity }) => {
  return (
    <div className="flex w-full items-center justify-between border">
      <Image src={`/hiteadrinks/${image}`} alt={name} width={96} height={96} />
      <p className="w-64">{name}</p>
      <p className="p-6 font-bold">{quantity}</p>
    </div>
  );
};

export default ItemSummary;
