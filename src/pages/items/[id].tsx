import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { TeaType, milkTeaData } from "~/utils/milkTeaData";

export default function Items() {
  const router = useRouter();
  const itemId = router.query.id as string;
  const item = milkTeaData
    .map((item) => item.teas)
    .flat()
    .find((item) => item.id === parseInt(itemId));

  if (!item) return <p>Item not found</p>;

  return (
    <>
      <Head>
        <title>Hi Tea</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center md:flex-row">
        <figure className="relative h-1/4 w-full md:h-1/2 md:w-1/2">
          <Image
            src={`/hiteadrinks/${item.image}`}
            alt={"photo of " + item.name}
            fill
            className="object-contain"
          />
        </figure>
        <ItemsDescription {...item} />
      </main>
    </>
  );
}

const ItemsDescription: React.FC<TeaType> = ({ name, price, description }) => {
  const [selectedOption, setSelectedOption] = useState(1);
  return (
    <div className="flex w-full flex-col items-start gap-3 p-2 md:w-1/2">
      <h1 className="text-3xl">{name}</h1>
      <p className="text-lg">£{(price / 100).toFixed(2)}</p>
      <p>{description}</p>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(parseInt(e.target.value))}
        className="rounded-full bg-gray-300 px-4 py-2"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <button className="rounded-lg bg-black p-3 text-lg text-white">
        Add {selectedOption} to order |{" £"}
        {((price * selectedOption) / 100).toFixed(2)}
      </button>
    </div>
  );
};