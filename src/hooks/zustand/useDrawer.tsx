import { create } from "zustand";

export type DrawerDataType = {
  drawerOpen: boolean;
};

type DrawerStoreType = DrawerDataType & {
  showDrawer: () => void;
  hideDrawer: () => void;
};

export const useDrawerStore = create<DrawerStoreType>((set) => ({
  drawerOpen: false,
  showDrawer: () =>
    set(() => ({
      drawerOpen: true,
    })),
  hideDrawer: () =>
    set(() => ({
      drawerOpen: false,
    })),
}));
