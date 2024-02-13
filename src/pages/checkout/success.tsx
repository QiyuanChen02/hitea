import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import ActionButton from "~/components/utils/actionbutton";
import OrderSummary from "~/components/utils/ordersummary";
import PageWrapper from "~/components/utils/pagewrapper";
import { useOrderIdStore } from "~/hooks/zustand/useOrderId";
import { api } from "~/utils/api";

export default function Success() {
  const { status } = useSession();
  const router = useRouter();
  const { orderId } = useOrderIdStore();
  const { data: myOrder } = api.orders.findOrderById.useQuery({ id: orderId });

  return (
    <PageWrapper>
      <div className="mt-3 flex w-full flex-col items-center gap-3 md:w-4/5 lg:w-3/5">
        <h2 className="text-xl">Thank you for ordering! </h2>
        <p>Please pay for your order at the counter.</p>
        {myOrder && <OrderSummary key={myOrder.id} {...myOrder} />}
        <div className="h-2" />
        {status === "authenticated" && (
          <ActionButton onClick={() => void router.push("/myorders")}>
            See All Orders
          </ActionButton>
        )}
      </div>
    </PageWrapper>
  );
}
