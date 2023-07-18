import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "~/components/pagewrapper";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { api } from "~/utils/api";
import { type ParsedItemType } from "../items/[id]";

export default function Checkout() {
  const items = useLocalStorage<ParsedItemType[]>([], "items");

  const { data: session } = useSession();
  const addOrder = api.orders.addOrder.useMutation();

  const onCheckout = async () => {
    if (!session) {
      await signIn("auth0");
    } else {
      addOrder.mutate(
        {
          order: JSON.stringify(items),
        },
        {
          onSuccess: () => localStorage.removeItem("items"),
        }
      );
    }
  };

  return (
    <PageWrapper>
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
          onClick={() => void onCheckout()}
        >
          Confirm Checkout
        </button>
      </div>
    </PageWrapper>
  );
}

const ItemSummary: React.FC<ParsedItemType> = ({ name, image, quantity }) => {
  return (
    <div className="flex w-full items-center justify-between border">
      <Image src={`/hiteadrinks/${image}`} alt={name} width={96} height={96} />
      <p className="w-64">{name}</p>
      <p className="p-6 font-bold">{quantity}</p>
    </div>
  );
};
