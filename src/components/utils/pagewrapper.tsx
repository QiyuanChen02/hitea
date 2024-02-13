import Head from "next/head";
import Navbar from "./navbar";

type PageWrapperType = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperType> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hi Tea</title>
        <meta
          name="description"
          content="The Best Milk Tea Shop in Birmingham"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="relative flex flex-col items-center">{children}</main>
    </>
  );
};

export default PageWrapper;
