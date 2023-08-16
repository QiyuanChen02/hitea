import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type ParsedItemType } from "~/pages/items/[id]";

export type ModalsDataType = {
  checkoutUpdateModals: string[];
};
type ModalStoreType = ModalsDataType & {
  showModal: (id: number) => void;
  hideModal: (id: number) => void;
};

export const useModalStore = create<ModalStoreType>((set) => ({
  checkoutUpdateModals: [],
  showModal: (id: number) =>
    set((state) => ({
      checkoutUpdateModals: [...state.checkoutUpdateModals, id.toString()],
    })),
  hideModal: (id: number) =>
    set((state) => ({
      checkoutUpdateModals: state.checkoutUpdateModals.filter(
        (modalId) => modalId !== id.toString()
      ),
    })),
}));
