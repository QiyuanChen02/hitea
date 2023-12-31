import Image from "next/image";
import { useRouter } from "next/router";
import ItemsDescription from "~/components/chooseItem/itemsdescription";
import PageWrapper from "~/components/utils/pagewrapper";
import { milkTeaData } from "~/utils/milkTeaData";

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
      <div className="my-4 flex w-full flex-col bg-white p-5 md:my-10 md:h-1/2 md:w-2/3 md:flex-row">
        <figure className="relative h-36 w-full md:h-80 md:w-1/2">
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
