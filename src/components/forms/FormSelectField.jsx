import { Form, InputGroup } from "react-bootstrap";

import AppErrorMessage from "./ErrorMessage";
import AppFormLabel from "./FormLabel";
import FormFieldContainer from "./FormFieldContainer";
import React from "react";
import { useField } from "formik";
import { useFormikContext } from "formik";

const FormSelectField = ({
  icon,
  label,
  LabelComponent,
  required,
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
        <Form.Select aria-label={label} {...field} {...otherProps}>
          {otherProps.children}
        </Form.Select>
        {icon && (
          <span className="input-group-text">
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
    </FormFieldContainer>
  );
};

export default FormSelectField;
