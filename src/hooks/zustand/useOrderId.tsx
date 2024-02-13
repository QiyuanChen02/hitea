import { create } from "zustand";
import { persist } from "zustand/middleware";

export type OrderIdDataType = {
  orderId: number | null;
};

type OrderIdStoreType = OrderIdDataType & {
  setOrderId: (newOrderId: number) => void;
};

export const useOrderIdStore = create<
  OrderIdStoreType,
  [["zustand/persist", OrderIdStoreType]]
>(
  persist(
    (set) => ({
      orderId: null,
      setOrderId: (newOrderId) =>
        set(() => ({
          orderId: newOrderId,
        })),
    }),
    { name: "orderId" }
  )
);
