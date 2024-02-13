import { useRouter } from "next/router";
import ActionButton from "~/components/utils/actionbutton";
import { WrappedErrorIcon } from "~/components/utils/error";
import { WrappedLoadingSpinner } from "~/components/utils/loading";
import OrderSummary from "~/components/utils/ordersummary";
import PageWrapper from "~/components/utils/pagewrapper";
import { useAdmin } from "~/hooks/utils/useAdmin";
import { api } from "~/utils/api";

export default function Admin() {
  const [isAdmin, adminStatus] = useAdmin();

  const router = useRouter();
  const { type } = router.query;

  const { data: orders, status: orderStatus } = api.orders.getOrders.useQuery(
    { type: type === "complete" ? "complete" : "inprogress" },
    {
      refetchInterval: 12000,
      refetchIntervalInBackground: true,
      enabled: isAdmin,
    }
  );

  if (adminStatus === "loading" || orderStatus === "loading")
    return <WrappedLoadingSpinner />;
  if (adminStatus === "unauthenticated")
    return (
      <WrappedErrorIcon
        text={"Log in with an admin account to access this page."}
      />
    );
  if (!orders) return <WrappedErrorIcon text={"Failed to fetch orders"} />;

  return (
    <PageWrapper>
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
        {orders.length !== 0 ? (
          orders.map((order) => (
            <OrderSummary key={order.id} {...order} isAdminPage />
          ))
        ) : (
          <p>No Orders Yet</p>
        )}
      </div>
    </PageWrapper>
  );
}
