import React from "react";

const FormFieldContainer = ({ children, ...otherProps }) => {
  return (
    <div className="mb-3" {...otherProps}>
      {children}
    </div>
  );
};

export default FormFieldContainer;
