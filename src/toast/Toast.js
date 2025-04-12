import React from "react";
import "./../toast/toast.css";

const Toast = ({ id, type, message, onClose, postion }) => {
  return (
    <div className={`notification ${type} ${postion
      }`}>
      {message}
      <button className="closeBtn" onClick={() => onClose(id)}>
        x
      </button>
    </div>
  );
};

export default Toast;
