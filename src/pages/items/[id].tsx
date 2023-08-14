import Image from "next/image";
import { useRouter } from "next/router";
import ItemsDescription from "~/components/itemsdescription";
import PageWrapper from "~/components/pagewrapper";
import { milkTeaData, type TeaType } from "~/utils/milkTeaData";

export type ParsedItemType = TeaType & { quantity: number };

export default function Items() {
  const router = useRouter();
  const itemId = router.query.id as string;
  const item = milkTeaData
    .map((item) => item.teas)
    .flat()
    .find((item) => item.id === parseInt(itemId));

  if (!item) return <p>Item not found</p>;

  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}
