import { Form } from "react-bootstrap";
import React from "react";
import { StyleTypesEnum } from "../../constants/enums";

const AppFormLabel = ({
  label,
  required,
  styleType,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  return (
    <Form.Label className={`text-${styleType}`}>
      {label}{" "}
      {required && <span className={`text-${StyleTypesEnum.Danger}`}>*</span>}
    </Form.Label>
  );
};

export default AppFormLabel;
