import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "~/components/pagewrapper";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { api } from "~/utils/api";
import { type ParsedItemType } from "../items/[id]";
import { useRouter } from "next/router";

export default function Checkout() {
  const items = useLocalStorage<ParsedItemType[]>([], "items");

  const { data: session } = useSession();
  const addOrder = api.orders.addOrder.useMutation();

  const router = useRouter();

  const onCheckout = async () => {
    if (!session) {
      await signIn("auth0");
    } else {
      addOrder.mutate(
        {
          order: JSON.stringify(items),
        },
        {
          onSuccess: () => {
            localStorage.removeItem("items");
            void router.push("/checkout/success");
          },
        }
      );
    }
  };

  return (
    <PageWrapper>
      <div className="mt-3 flex w-full flex-col gap-6 md:w-1/2">
        <div className="flex w-full justify-between p-2">
          <h2 className="p-2 text-2xl">Order Summary</h2>
          <Link className="rounded-full border border-black p-2" href={"/"}>
            + Add items
          </Link>
        </div>
        <div className="flex w-full flex-col gap-4 p-2 ">
          {items.map((item) => (
            <ItemSummary key={item.id} {...item} />
          ))}
        </div>
        <button
          className="mx-2 rounded-full border border-black p-2 "
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
