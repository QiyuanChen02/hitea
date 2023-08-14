import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import ItemSummary from "~/components/checkout/itemsummary";
import PageWrapper from "~/components/utils/pagewrapper";
import { useCartStore } from "~/hooks/zustand/useCart";
import { api } from "~/utils/api";

export default function Checkout() {
  const { items, clearItems } = useCartStore();

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
            clearItems();
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
        <div className="flex w-full flex-col gap-4 p-2">
          {items.map((item) => (
            <ItemSummary key={item.id} item={item} />
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
