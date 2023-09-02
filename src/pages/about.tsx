import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import PageWrapper from "~/components/utils/pagewrapper";
import { useAdmin } from "~/hooks/utils/useAdmin";
import { api, type RouterOutputs } from "~/utils/api";
import { type ParsedItemType } from "./items/[id]";
import ActionButton from "~/components/utils/actionbutton";

export default function Admin() {
  return (
    <PageWrapper>
      <p className="p-4">This is the about page</p>
    </PageWrapper>
  );
}

export type OrderType = RouterOutputs["orders"]["getOrders"][number];
