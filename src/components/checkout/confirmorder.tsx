import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCartStore } from "~/hooks/zustand/useCart";
import { api } from "~/utils/api";

const ConfirmOrder: React.FC = () => {
  const { items, clearItems, pickupTime, setPickupTime } = useCartStore();

  const { data: session } = useSession();
  const addOrder = api.orders.addOrder.useMutation();
  const router = useRouter();

  const onCheckout = async () => {
    if (!session) {
      await signIn("auth0");
    } else if (!pickupTime) {
      alert("Please select a pickup time");
    } else if (items.length === 0) {
      alert("Please add items to your cart");
    } else {
      addOrder.mutate(
        {
          items: JSON.stringify(items),
          pickupTime,
        },
        {
          onSuccess: () => {
            clearItems();
            setPickupTime(null);
            void router.push("/checkout/success");
          },
        }
      );
    }
  };

  return (
    <button
      className="mx-2 rounded-full border border-black p-2 "
      onClick={() => void onCheckout()}
    >
      Confirm Checkout
    </button>
  );
};

export default ConfirmOrder;
