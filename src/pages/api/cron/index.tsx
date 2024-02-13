// Created to read the planetscale database once a day so it does not go to sleep
// See https://planetscale.com/docs/concepts/database-sleeping

import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "~/server/db";

export default async function cronHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await prisma.order.findFirst();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
