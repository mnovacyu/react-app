// rafce (reactArrowFunctionComponentExport) shortcut

import { ReactNode } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger"; // sets the possible options for color property
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  // sets default color to primary
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
