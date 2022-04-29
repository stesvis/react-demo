import { CBreadcrumb } from "@coreui/react";
import React from "react";

const Breadcrumbs = ({ children }) => {
  return (
    <div className="container-fluid">
      <CBreadcrumb className=" my-0 ms-2">{children}</CBreadcrumb>
    </div>
  );
};

export default Breadcrumbs;
