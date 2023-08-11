import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import ItemInfo from "~/components/iteminfo";
import ItemsDescription from "~/components/itemsdescription";
import Navbar from "~/components/navbar";
import PageWrapper from "~/components/pagewrapper";
import { type TeaType, milkTeaData } from "~/utils/milkTeaData";

export type ParsedItemType = TeaType & { quantity: number };

export default function Items() {
  const router = useRouter();
  const itemId = router.query.id as string;
  const item = milkTeaData
    .map((item) => item.teas)
    .flat()
    .find((item) => item.id === parseInt(itemId));

  if (!item) return <p>Item not found</p>;

  return (
    <PageWrapper>
      <ItemInfo item={{ ...item, quantity: 1 }} />
    </PageWrapper>
  );
}
