import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import PageWrapper from "~/components/utils/pagewrapper";
import { useAdmin } from "~/hooks/utils/useAdmin";
import { api, type RouterOutputs } from "~/utils/api";
import { type ParsedItemType } from "./items/[id]";
import ActionButton from "~/components/utils/actionbutton";

export default function Admin() {
  const [isAdmin, status] = useAdmin();

  const router = useRouter();
  const { type } = router.query;

  const { data: orders } = api.orders.getOrders.useQuery(
    { type: type === "complete" ? "complete" : "inprogress" },
    {
      refetchInterval: 6000,
    }
  );

  if (status === "loading") return <p>Loading...</p>;
  return (
    <PageWrapper>
      {!isAdmin ? (
        <a onClick={() => void signIn("auth0")}>
          Sign In With an admin account to access this page
        </a>
      ) : (
        <div className="mt-10 flex w-5/6 flex-col gap-4 md:w-1/2">
          <div className="flex gap-2">
            <ActionButton
              onClick={() => void router.push("/admin?type=inprogress")}
            >
              In Progress
            </ActionButton>
            <ActionButton
              onClick={() => void router.push("/admin?type=complete")}
            >
              Complete
            </ActionButton>
          </div>
          {orders && orders.map((order) => <Order key={order.id} {...order} />)}
        </div>
      )}
    </PageWrapper>
  );
}

export type OrderType = RouterOutputs["orders"]["getOrders"][number];

const Order: React.FC<OrderType> = ({ items, id, finished, pickupTime }) => {
  const parsedItems = JSON.parse(items) as ParsedItemType[];
  const finishOrder = api.orders.finishOrder.useMutation();

  const utils = api.useContext();

  const onFinishOrder = () => {
    finishOrder.mutate(
      { id },
      { onSuccess: () => void utils.orders.getOrders.invalidate() }
    );
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-lg">Order {id.slice(0, 10)}</h2>
        <p>{finished ? "Complete" : "In Progress"}</p>
        <p>{pickupTime}</p>
      </div>

      <div className="gap-2 border p-2">
        {parsedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>

      <ActionButton bgColour="bg-green-500" onClick={onFinishOrder}>
        Finish Order
      </ActionButton>
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
