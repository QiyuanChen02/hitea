import Menu from "~/components/menuItems";
import PageWrapper from "~/components/pagewrapper";

export default function Home() {
  return (
    <PageWrapper>
      {/* <button onClick={() => void signIn("auth0")}>Sign in</button>
        <Link href="/admin">Go To Admin</Link> */}
      <Menu />
    </PageWrapper>
  );
}
