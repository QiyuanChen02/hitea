import Link from "next/link";
import PageWrapper from "~/components/utils/pagewrapper";

export default function Success() {
  return (
    <PageWrapper>
      <div className="mt-3 flex w-full flex-col items-center gap-3 md:w-4/5">
        <h2 className="text-xl">Thank you for ordering! </h2>
        <p>Please pay for your order at the counter.</p>
        <p>
          To check your current order, go to the My Orders page{" "}
          <Link className="text-blue-700" href="/myorders">
            here
          </Link>
        </p>
      </div>
    </PageWrapper>
  );
}
