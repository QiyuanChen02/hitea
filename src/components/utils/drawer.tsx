import { useDrawerStore } from "~/hooks/zustand/useDrawer";

type DrawerType = {
  children: React.ReactNode;
};

const Drawer: React.FC<DrawerType> = ({ children }) => {
  const { hideDrawer } = useDrawerStore();
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen">
      <div
        onClick={() => hideDrawer()}
        className="absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-50"
      />
      <div className="relative flex h-full w-72 flex-col bg-white">
        {children}
      </div>
    </div>
  );
};

export default Drawer;
