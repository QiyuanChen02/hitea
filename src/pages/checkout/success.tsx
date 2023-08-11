import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "~/components/pagewrapper";
import { useLocalStorage } from "~/hooks/useLocalStorage";
import { api } from "~/utils/api";
import { type ParsedItemType } from "../items/[id]";

export default function Success() {
  return (
    <PageWrapper>
      <div className="mt-3 flex w-full flex-col items-center gap-3 md:w-4/5">
        <h2 className="text-xl">Thank you for ordering!</h2>
        <p>
          To check your current orders, go to the order page{" "}
          <Link className="text-blue-700" href="/orders">
            here
          </Link>
        </p>
      </div>
    </PageWrapper>
  );
}
