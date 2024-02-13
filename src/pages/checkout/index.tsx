import ConfirmOrder from "~/components/checkout/confirmorder";
import OrderInfo from "~/components/checkout/orderinfo";
import PageWrapper from "~/components/utils/pagewrapper";
import { useDomLoaded } from "~/hooks/utils/useDomLoaded";

export default function Checkout() {
  const domLoaded = useDomLoaded();
  return (
    <PageWrapper>
      {domLoaded && (
        <div className="flex w-full flex-col items-center gap-4 p-5 md:w-3/4 lg:w-1/2">
          <OrderInfo />
          {/* <PickupTime /> */}
          <ConfirmOrder />
        </div>
      )}
    </PageWrapper>
  );
}
