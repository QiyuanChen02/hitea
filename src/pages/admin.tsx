import { signIn } from "next-auth/react";
import PageWrapper from "~/components/pagewrapper";
import { useAdmin } from "~/hooks/useAdmin";
import { type RouterOutputs, api } from "~/utils/api";
import { type ParsedItemType } from "./items/[id]";
import ItemSummary from "~/components/itemsummary";

export default function Admin() {
  const [isAdmin, status] = useAdmin();

  const { data: orders } = api.orders.getOrders.useQuery(undefined, {
    refetchInterval: 6000,
  });

  if (status === "loading") return <p>Loading...</p>;
  return (
    <PageWrapper>
      {!isAdmin ? (
        <a onClick={() => void signIn("auth0")}>
          Sign In With an admin account to access this page
        </a>
      ) : (
        <>
          <h1>Admin Page</h1>
          {orders && orders.map((order) => <Order key={order.id} {...order} />)}
        </>
      )}
    </PageWrapper>
  );
}

type OrderType = RouterOutputs["orders"]["getOrders"][number];

const Order: React.FC<OrderType> = ({ items, id, finished }) => {
  const parsedItems = JSON.parse(items) as ParsedItemType[];
  const deleteOrder = api.orders.deleteOrder.useMutation();
  const finishOrder = api.orders.finishOrder.useMutation();

  const utils = api.useContext();

  const onDeleteOrder = () => {
    deleteOrder.mutate(
      { id },
      { onSuccess: () => void utils.orders.getOrders.invalidate() }
    );
  };

  const onFinishOrder = () => {
    finishOrder.mutate(
      { id },
      { onSuccess: () => void utils.orders.getOrders.invalidate() }
    );
  };
  return (
    <div>
      <h2 className="text-lg">Order {id.slice(0, 5)}</h2>
      <p>{finished ? "finished" : "not finished"}</p>
      {parsedItems.map((item) => (
        <ItemSummary key={item.id} {...item} />
      ))}
      <button onClick={onFinishOrder}>Finish Order</button>
      <button onClick={onDeleteOrder}>Delete Order</button>
    </div>
  );
};
