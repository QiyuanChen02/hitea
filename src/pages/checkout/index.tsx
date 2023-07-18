import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "~/components/navbar";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { type ParsedItemType } from "../items/[id]";

export default function Checkout() {
  const [items, , itemsLoading] = useLocalStorage<ParsedItemType[]>(
    [],
    "items"
  );

  if (itemsLoading) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>Hi Tea</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center">
        <Navbar />
        <div className="flex w-4/5 flex-col items-center md:w-1/2">
          <div className="flex w-full justify-between">
            <h2 className="text-xl">Order Summary</h2>
            <Link className="rounded-full border border-black p-2" href={"/"}>
              + Add items
            </Link>
          </div>
          <div className="flex w-full flex-col gap-2">
            {items.map((item) => (
              <ItemSummary key={item.id} {...item} />
            ))}
          </div>
          <button
            className="rounded-full border border-black p-2"
            onClick={() => alert("checking out...")}
          >
            Confirm Checkout
          </button>
        </div>
      </main>
    </>
  );
}

const ItemSummary: React.FC<ParsedItemType> = ({
  id,
  name,
  image,
  quantity,
}) => {
  return (
    <div className="flex w-full items-center justify-between border">
      <Image src={`/hiteadrinks/${image}`} alt={name} width={96} height={96} />
      <p className="w-64">{name}</p>
      <p className="p-6 font-bold">{quantity}</p>
    </div>
  );
};
