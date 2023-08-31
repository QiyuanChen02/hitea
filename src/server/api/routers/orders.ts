import { z } from "zod";
import { prisma } from "~/server/db";
import { adminProcedure, createTRPCRouter, protectedProcedure } from "../trpc";

export const ordersRouter = createTRPCRouter({
  addOrder: protectedProcedure
    .input(z.object({ items: z.string(), pickupTime: z.string() }))
    .mutation(async ({ input, ctx }) => {
      return prisma.order.create({
        data: {
          items: input.items,
          pickupTime: input.pickupTime,
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

  findOrderByUser: protectedProcedure.query(async ({ ctx }) => {
    return prisma.order.findMany({
      where: { userId: ctx.session.user.id },
      orderBy: { createdAt: "desc" },
    });
  }),
});
