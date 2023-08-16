import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type ParsedItemType } from "~/pages/items/[id]";

type CartStoreType = {
  items: ParsedItemType[];
  addItem: (item: ParsedItemType) => void;
  deleteItem: (id: number) => void;
  increaseQuantity: (id: number, count: number) => void;
  updateQuantity: (id: number, count: number) => void;
  clearItems: () => void;
  setItems: (items: ParsedItemType[]) => void;
};

export const useCartStore = create<
  CartStoreType,
  [["zustand/persist", CartStoreType]]
>(
  persist(
    (set) => ({
      items: [],
      increaseQuantity: (id: number, count: number) =>
        set((state) => ({
          items: state.items.map((item) => {
            return {
              ...item,

              quantity: item.id === id ? item.quantity + count : item.quantity,
            };
          }),
        })),
      updateQuantity: (id: number, count: number) =>
        set((state) => ({
          items: state.items.map((item) => {
            return {
              ...item,
              quantity: item.id === id ? count : item.quantity,
            };
          }),
        })),

      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      deleteItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearItems: () => set({ items: [] }),
      setItems: (items) => set({ items }),
    }),
    { name: "cart" }
  )
);