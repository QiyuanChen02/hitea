import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCartStore } from "~/hooks/zustand/useCart";
import { api } from "~/utils/api";
import ActionButton from "../utils/actionbutton";
import { useOrderIdStore } from "~/hooks/zustand/useOrderId";

const ConfirmOrder: React.FC = () => {
  const { items, clearItems, pickupTime, setPickupTime } = useCartStore();
  const { setOrderId } = useOrderIdStore();

  const { status } = useSession();
  const addOrder = api.orders.addOrder.useMutation();
  const router = useRouter();

  const onCheckout = () => {
    if (items.length === 0) {
      alert("Please add some items to your cart");
    } else {
      addOrder.mutate(
        {
          items: JSON.stringify(items),
          pickupTime: pickupTime ?? undefined,
        },
        {
          onSuccess: (data) => {
            setOrderId(data.id);
            clearItems();
            setPickupTime(null);
            void router.push("/checkout/success");
          },
        }
      );
    }
  };

  return (
    <>
      {status === "authenticated" ? (
        <ActionButton onClick={() => void onCheckout()}>
          Confirm Checkout
        </ActionButton>
      ) : (
        <div className="flex gap-3">
          <ActionButton onClick={() => void onCheckout()}>
            Checkout as Guest
          </ActionButton>
          <ActionButton onClick={() => void signIn("google")}>
            Sign In and Checkout
          </ActionButton>
        </div>
      )}
    </>
  );
};

export default ConfirmOrder;
