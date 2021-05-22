import React from "react";

function Alert({ colorClass, text }) {
  return (
    <div
      className={`alert rounded-0 alert-${colorClass} text-center sticky-top w-100`}
      role="alert"
    >
      {text}
    </div>
  );
}

export default Alert;
