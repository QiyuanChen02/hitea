import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import MenuItems from "~/components/menuItems";
import Navbar from "~/components/navbar";
import PageWrapper from "~/components/pagewrapper";
import { api } from "~/utils/api";

export default function Home() {
  return (
    <PageWrapper>
      {/* <button onClick={() => void signIn("auth0")}>Sign in</button>
        <Link href="/admin">Go To Admin</Link> */}
      <MenuItems />
    </PageWrapper>
  );
}
