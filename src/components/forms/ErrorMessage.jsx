import React from "react";

const AppErrorMessage = ({ error, visible, ...otherProps }) => {
  // hide the control
  if (!visible) return null;

  return (
    <label className={`text-danger`} {...otherProps}>
      {error}
    </label>
  );
};

export default AppErrorMessage;
