import dayjs from "dayjs";
import PageWrapper from "~/components/utils/pagewrapper";
import { api } from "~/utils/api";
import { OrderType } from "../admin";
import { ParsedItemType } from "../items/[id]";

export default function MyOrders() {
  const { data: userOrders } = api.orders.findOrderByUser.useQuery(undefined, {
    refetchInterval: 6000,
  });

  return (
    <PageWrapper>
      <div className="mt-3 flex w-full flex-col items-center gap-3 md:w-4/5">
        <h2 className="text-xl">My Orders</h2>
        {userOrders &&
          userOrders.map((order) => <MyOrder key={order.id} {...order} />)}
      </div>
    </PageWrapper>
  );
}

const MyOrder: React.FC<OrderType> = ({ items, id, finished, createdAt }) => {
  const parsedItems = JSON.parse(items) as ParsedItemType[];

  return (
    <div className="mt-10 flex w-5/6 flex-col gap-4 md:w-1/2">
      <div className="flex justify-between">
        <h2 className="text-lg">Order {id.slice(0, 5)}</h2>
        <p>{finished ? "Complete" : "In Progress"}</p>
      </div>

      <div className="gap-2 border p-2">
        {parsedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
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
