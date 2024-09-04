// rafce (reactArrowFunctionComponentExport) shortcut

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void; // what happens when close button is clicked
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose} // onClose will be a function passed from the outside parent
      ></button>
    </div>
  );
};

export default Alert;
