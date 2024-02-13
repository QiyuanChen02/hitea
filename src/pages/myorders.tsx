import { WrappedErrorIcon } from "~/components/utils/error";
import { WrappedLoadingSpinner } from "~/components/utils/loading";
import OrderSummary from "~/components/utils/ordersummary";
import PageWrapper from "~/components/utils/pagewrapper";
import { api } from "~/utils/api";

export default function MyOrders() {
  const { data: userOrders, status } = api.orders.findOrderByUser.useQuery();

  if (status === "loading") return <WrappedLoadingSpinner />;
  if (!userOrders || status === "error")
    return <WrappedErrorIcon text={"Couldn't load orders"} />;

  return (
    <PageWrapper>
      <div className="mt-3 flex w-full flex-col items-center gap-4 md:w-2/3 lg:w-1/2">
        <h2 className="text-xl">My Orders</h2>
        {userOrders.length !== 0 ? (
          userOrders.map((order) => <OrderSummary key={order.id} {...order} />)
        ) : (
          <p>You currently have no orders in progress</p>
        )}
      </div>
    </PageWrapper>
  );
}
