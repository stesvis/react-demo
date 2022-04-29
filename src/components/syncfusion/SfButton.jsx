import React, { useRef } from "react";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const SfButton = ({ children, ...otherProps }) => {
  const sfButton = useRef();

  const onCreated = () => {
    // sfButton.current.element.classList.remove("e-lib");
    // sfButton.current.element.classList.remove("e-control");
    // sfButton.current.element.classList.remove("e-btn");
  };

  return (
    <ButtonComponent
      created={onCreated}
      ref={sfButton}
      type="button"
      {...otherProps}>
      {children}
    </ButtonComponent>
  );
};

export default SfButton;
