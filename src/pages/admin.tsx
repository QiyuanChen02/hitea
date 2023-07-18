import { inferProcedureOutput } from "@trpc/server";
import PageWrapper from "~/components/pagewrapper";
import { useAdmin } from "~/hooks/useAdmin";
import { useConsole } from "~/hooks/useConsole";
import { RouterInputs, RouterOutputs, api } from "~/utils/api";
import { ParsedItemType } from "./items/[id]";

export default function Admin() {
  const [isAdmin, status] = useAdmin();

  const { data: orders } = api.orders.getOrders.useQuery();

  useConsole(isAdmin, "isAdmin");

  if (status === "loading") return <p>Loading...</p>;
  if (!isAdmin) return <p>Access Denied</p>;
  return (
    <PageWrapper>
      <h1>Admin Page</h1>
      {orders && orders.map((order) => <Order key={order.id} {...order} />)}
    </PageWrapper>
  );
}

type OrderType = RouterOutputs["orders"]["getOrders"][number];

const Order: React.FC<OrderType> = ({ items }) => {
  const parsedItems = JSON.parse(items) as ParsedItemType[];
  return (
    <div>
      {parsedItems.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};
