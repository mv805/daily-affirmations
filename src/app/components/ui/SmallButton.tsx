import { ReactNode } from "react";

interface SmallButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const SmallButton: React.FC<SmallButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="bg-blue-600 rounded p-2 min-w-40 flex justify-center m-1 active:bg-slate-200 hover:bg-blue-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SmallButton;
