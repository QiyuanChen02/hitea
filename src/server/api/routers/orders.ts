import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { prisma } from "~/server/db";

export const ordersRouter = createTRPCRouter({
  addOrder: protectedProcedure
    .input(z.object({ order: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return prisma.order.create({
        data: {
          items: input.order,
          userId: ctx.session.user.id,
        },
      });
    }),
});
