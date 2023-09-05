import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import PageWrapper from "~/components/utils/pagewrapper";
import { useAdmin } from "~/hooks/utils/useAdmin";
import { api, type RouterOutputs } from "~/utils/api";
import ActionButton from "~/components/utils/actionbutton";
import { ParsedItemType } from "~/utils/milkTeaData";
import OrderSummary from "~/components/utils/ordersummary";

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

  if (!orders) return <p>Loading...</p>;
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
          {orders.length !== 0 ? (
            orders.map((order) => (
              <OrderSummary key={order.id} {...order} isAdminPage />
            ))
          ) : (
            <p>No Orders Yet</p>
          )}
        </div>
      )}
    </PageWrapper>
  );
}
