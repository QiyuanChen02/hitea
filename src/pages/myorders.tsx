import PageWrapper from "~/components/utils/pagewrapper";
import { api } from "~/utils/api";
import { type ParsedItemType } from "~/utils/milkTeaData";
import OrderSummary, {
  OrderSummaryType,
} from "~/components/utils/ordersummary";

export default function MyOrders() {
  const { data: userOrders } = api.orders.findOrderByUser.useQuery(undefined, {
    refetchInterval: 6000,
  });

  return (
    <PageWrapper>
      <div className="mt-3 flex w-full flex-col items-center gap-4 md:w-1/2">
        <h2 className="text-xl">My Orders</h2>
        {userOrders &&
          userOrders.map((order) => <OrderSummary key={order.id} {...order} />)}
      </div>
    </PageWrapper>
  );
}
