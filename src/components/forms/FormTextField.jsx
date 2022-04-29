import { Form, InputGroup } from "react-bootstrap";

import AppErrorMessage from "./ErrorMessage";
import AppFormLabel from "./FormLabel";
import { ElementSize } from "../../constants/enums";
import FormFieldContainer from "./FormFieldContainer";
import React from "react";
import { useField } from "formik";
import { useFormikContext } from "formik";

const FormTextField = ({
  hasFloatingLabel,
  icon,
  label = null,
  LabelComponent,
  onIconClick = () => {},
  placeholder,
  required,
  size = ElementSize.md,
  ...otherProps
}) => {
  const [field] = useField(otherProps);
  const formik = useFormikContext();
  const { errors, touched } = formik;

  return (
    <FormFieldContainer>
      <AppFormLabel label={label} required={required} visible={label} />
      {LabelComponent}
      <InputGroup>
        <Form.Control
          {...field}
          className={`form-control-${size}`}
          placeholder={hasFloatingLabel ? placeholder ?? label : placeholder}
          {...otherProps}
        />
        {icon && (
          <span
            className={`input-group-text ${
              onIconClick === null ? "" : "cur-pointer"
            }`}
            onClick={onIconClick}>
            <i className={icon}></i>
          </span>
        )}
      </InputGroup>
      <div>
        <AppErrorMessage
          error={errors[field.name]}
          visible={touched[field.name] && errors[field.name]}
        />
      </div>
      {/* {JSON.stringify(errors[field.name], null, 4)} */}
    </FormFieldContainer>
  );
};

export default FormTextField;
