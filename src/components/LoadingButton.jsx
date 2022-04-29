import React from "react";
import { StyleTypesEnum } from "../constants/enums";

const LoadingButton = ({
  type = "button",
  title = "",
  loading,
  disabled,
  icon = "fa fa-spinner fa-spin me-2",
  onClick,
  styleType = StyleTypesEnum.Primary,
  ...props
}) => {
  disabled = disabled ?? loading;

  return (
    <button
      type={type}
      className={`btn btn-${styleType} ${props.className ?? ""}`} // mt-2 mb-2
      onClick={onClick}
      disabled={disabled ? "disabled" : null}>
      {loading && <i className={icon} />} {title}
    </button>
  );
};

export default LoadingButton;
