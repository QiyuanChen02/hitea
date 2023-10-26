import PageWrapper from "~/components/utils/pagewrapper";

export default function Admin() {
  return (
    <PageWrapper>
      <div className="mt-3 flex w-full flex-col items-center gap-4 md:w-1/2">
        <h2 className="text-xl">Help</h2>
        <p>Help page</p>
      </div>
    </PageWrapper>
  );
}
