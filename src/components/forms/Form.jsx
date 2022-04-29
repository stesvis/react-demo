import { Formik } from "formik";
import React from "react";

const AppForm = ({
  initialValues,
  onSubmit = () => {},
  validationSchema,
  ...otherProps
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...otherProps}>
      {() => <div>{otherProps.children}</div>}
    </Formik>
  );
};

export default AppForm;
