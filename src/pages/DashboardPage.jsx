import "/node_modules/@syncfusion/ej2-react-buttons/styles/material.css";

import { CBreadcrumbItem, CCallout } from "@coreui/react";

import Page from "./Page";
import React from "react";
import SfButton from "../components/syncfusion/SfButton";

const DashboardPage = () => {
  const breadcrumbs = <CBreadcrumbItem active>Home</CBreadcrumbItem>;

  return (
    <Page breadcrumbs={breadcrumbs}>
      <h1>Dashboard</h1>
      <CCallout color="warning">This is just a sample page.</CCallout>

      <SfButton cssClass="btn btn-primary">Syncfusion Button</SfButton>
      <br />
      <br />
      <button type="button" className="btn btn-primary">
        Theme Button
      </button>
    </Page>
  );
};

export default DashboardPage;
