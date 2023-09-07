import { useRouter } from "next/router";
import ItemSummary from "~/components/checkout/itemsummary";
import { useCartStore } from "~/hooks/zustand/useCart";
import ActionButton from "../utils/actionbutton";

const OrderInfo: React.FC = () => {
  const { items } = useCartStore();
  const router = useRouter();

  const totalCost = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="mt-4 flex w-full flex-col">
      <div className="flex w-full justify-between">
        <h2 className="text-2xl">Order Info</h2>
        <ActionButton onClick={() => void router.push("/")}>
          + Add items
        </ActionButton>
      </div>
      <div className="flex w-full flex-col gap-4">
        {items.length !== 0 ? (
          <div className="py-4">
            {items.map((item) => (
              <ItemSummary key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p>No items in cart</p>
        )}
      </div>
      {items.length !== 0 && (
        <p className="mx-2 text-right text-lg">
          Total Cost: £{(totalCost / 100).toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default OrderInfo;
