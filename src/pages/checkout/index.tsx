import ConfirmOrder from "~/components/checkout/confirmorder";
import OrderInfo from "~/components/checkout/orderinfo";
import PickupTime from "~/components/checkout/pickuptime";
import PageWrapper from "~/components/utils/pagewrapper";
import { useDomLoaded } from "~/hooks/utils/useDomLoaded";

export default function Checkout() {
  const domLoaded = useDomLoaded();
  return (
    <PageWrapper>
      {domLoaded && (
        <div className="flex w-full flex-col items-center gap-4 md:w-1/2">
          <OrderInfo />
          <PickupTime />
          <ConfirmOrder />
        </div>
      )}
    </PageWrapper>
  );
}
