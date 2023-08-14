import Image from "next/image";
import { type ParsedItemType } from "~/pages/items/[id]";
import ItemsDescription from "./itemsdescription";

const ItemInfo: React.FC<ParsedItemType> = (item) => {
  return (
    <div className="center flex h-full w-full flex-col bg-white p-5 md:h-1/2 md:w-2/3 md:flex-row">
      <figure className="relative h-1/4 w-full md:h-full md:w-1/2">
        <Image
          src={`/hiteadrinks/${item.image}`}
          alt={"photo of " + item.name}
          fill
          className="object-contain"
        />
      </figure>
      <ItemsDescription {...item} />
    </div>
  );
};

export default ItemInfo;
