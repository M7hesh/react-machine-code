import React from "react";
import "./../toast/toast.css";

export default Toast = ({ type, message, onClose }) => {
  return (
    <div className={`notification ${type}`}>
      {message}
      <button onClick={onClose}>x</button>
    </div>
  );
};
