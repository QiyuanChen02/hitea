import Menu from "~/components/index/menuItems";
import PageWrapper from "~/components/utils/pagewrapper";

export default function Home() {
  return (
    <PageWrapper>
      {/* <button onClick={() => void signIn("auth0")}>Sign in</button>
        <Link href="/admin">Go To Admin</Link> */}
      <Menu />
    </PageWrapper>
  );
}
