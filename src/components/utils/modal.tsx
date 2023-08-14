import { type ModalsDataType, useModalStore } from "~/hooks/zustand/useModal";
import IconButton from "../utils/iconbutton";

type ModalType = {
  children: React.ReactNode;
  id: number;
};

const Modal: React.FC<ModalType> = ({ children, id }) => {
  const { hideModal } = useModalStore();
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen">
      <div
        onClick={() => hideModal(id)}
        className="absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-50"
      />
      <div className="center flex h-full w-full flex-col bg-white p-5 md:h-4/5 md:w-1/2">
        <div onClick={() => hideModal(id)}>
          <IconButton
            imageSrc="icons/close.svg"
            altText="close tab"
            width={24}
            height={24}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
