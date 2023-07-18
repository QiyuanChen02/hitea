import PageWrapper from "~/components/pagewrapper";
import { useAdmin } from "~/hooks/useAdmin";
import { useConsole } from "~/hooks/useConsole";

export default function Admin() {
  const [isAdmin, status] = useAdmin();

  useConsole(isAdmin, "isAdmin");

  if (status === "loading") return <p>Loading...</p>;
  if (!isAdmin) return <p>Access Denied</p>;
  return (
    <PageWrapper>
      <h1>Admin Page</h1>
    </PageWrapper>
  );
}
