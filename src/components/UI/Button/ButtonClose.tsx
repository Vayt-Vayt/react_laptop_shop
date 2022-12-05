import React from "react";

import styless from "./ButtonClose.module.scss";

type close = {
  onClose: () => void;
};

const ButtonClose = ({ onClose }: close) => {
  return (
    <button onClick={onClose} className={styless.close} aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  );
};

export default ButtonClose;
