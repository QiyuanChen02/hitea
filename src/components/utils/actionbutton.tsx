type ActionButtonType = {
  onClick: () => void;
  children: React.ReactNode;
  bgColour?: string;
  large?: boolean;
};

const ActionButton: React.FC<ActionButtonType> = ({
  children,
  onClick,
  bgColour = "bg-purple-700",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`mb-2 rounded-lg ${bgColour} text px-5 py-3 font-medium text-white hover:brightness-110 focus:outline-none`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
