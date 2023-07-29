import { z } from "zod";
import { adminProcedure, createTRPCRouter, protectedProcedure } from "../trpc";
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

  getOrders: adminProcedure.query(async () => {
    return prisma.order.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),

  finishOrder: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      return prisma.order.update({
        where: { id: input.id },
        data: { finished: true },
      });
    }),

  deleteOrder: adminProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      return prisma.order.delete({ where: { id: input.id } });
    }),
});
