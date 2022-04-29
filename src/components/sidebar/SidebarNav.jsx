import { AppRoutes } from "../../constants/appRoutes";
import DashboardIcon from "@mui/icons-material/Dashboard";
import React from "react";
import SidebarLink from "./SidebarLink";
import SidebarToggler from "./SidebarToggler";

const SidebarNav = ({ visible = true }) => {
  if (!visible) return null;

  return (
    // <CCollapse className="sidebar-collapse" horizontal visible={visible}>
    <div className="sidebar sidebar-dark sidebar-fixed" id="sidebar">
      <div className="sidebar-brand d-none d-md-flex"></div>
      <ul className="sidebar-nav" data-coreui="navigation" data-simplebar>
        <SidebarLink
          IconComponent={DashboardIcon}
          path={AppRoutes.dashboard}
          title="Dashboard"
        />
      </ul>
      {/* <SidebarToggler /> */}
    </div>
    // </CCollapse>
  );
};

export default SidebarNav;
