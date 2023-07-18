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
      <div className="mt-3 flex w-full flex-col gap-3 md:w-4/5">
        <div>Successfully ordered!</div>
      </div>
    </PageWrapper>
  );
}
