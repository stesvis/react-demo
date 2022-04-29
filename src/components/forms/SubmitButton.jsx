import LoadingButton from "../LoadingButton";
import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ loading, title = "Submit", ...otherProps }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <LoadingButton
      title={title}
      type="submit"
      loading={loading}
      onClick={handleSubmit}
    />
  );
};

export default SubmitButton;
