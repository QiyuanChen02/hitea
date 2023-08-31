import Link from "next/link";
import ItemSummary from "~/components/checkout/itemsummary";
import { useCartStore } from "~/hooks/zustand/useCart";

const OrderSummary: React.FC = () => {
  const { items } = useCartStore();

  const totalCost = items.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="mt-3 flex w-full flex-col gap-6 md:w-1/2">
      <div className="flex w-full justify-between p-2">
        <h2 className="text-2xl">Order Info</h2>
        <Link className="rounded-full border border-black p-2" href={"/"}>
          + Add items
        </Link>
      </div>
      <div className="flex w-full flex-col gap-4 p-2">
        {items.length !== 0 ? (
          items.map((item) => <ItemSummary key={item.id} item={item} />)
        ) : (
          <p className="p-2">No items in cart</p>
        )}
      </div>
      <p className="mx-2 text-right text-lg">
        Total Cost: £{(totalCost / 100).toFixed(2)}
      </p>
    </div>
  );
};

export default OrderSummary;
