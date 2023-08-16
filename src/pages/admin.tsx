import { signIn } from "next-auth/react";
import PageWrapper from "~/components/utils/pagewrapper";
import { useAdmin } from "~/hooks/utils/useAdmin";
import { api, type RouterOutputs } from "~/utils/api";
import { type ParsedItemType } from "./items/[id]";
import dayjs from "dayjs";

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
        <div className="mt-10 flex w-5/6 flex-col gap-4 md:w-1/2">
          {orders && orders.map((order) => <Order key={order.id} {...order} />)}
        </div>
      )}
    </PageWrapper>
  );
}

export type OrderType = RouterOutputs["orders"]["getOrders"][number];

const Order: React.FC<OrderType> = ({ items, id, finished, createdAt }) => {
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
      <div className="flex justify-between">
        <h2 className="text-lg">Order {id.slice(0, 5)}</h2>
        <p>{finished ? "Complete" : "In Progress"}</p>
        <p>{dayjs(createdAt).format("HH:mm:ss")}</p>
      </div>

      <div className="gap-2 border p-2">
        {parsedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>

      <button
        className="m-2 rounded-xl bg-green-300 px-4 py-2"
        onClick={onFinishOrder}
      >
        Finish Order
      </button>
      <button
        className="m-2 rounded-xl bg-red-300 px-4 py-2"
        onClick={onDeleteOrder}
      >
        Delete Order
      </button>
    </div>
  );
};

type ItemType = {
  item: ParsedItemType;
};

const Item: React.FC<ItemType> = ({ item }) => {
  return (
    <div className="flex justify-between gap-2">
      <p>{item.name}</p>
      <p>X{item.quantity}</p>
    </div>
  );
};
