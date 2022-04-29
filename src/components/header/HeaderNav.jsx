import Breadcrumbs from "./Breadcrumbs";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import React from "react";

const HeaderNav = ({
  breadcrumbs,
  onToggleSidebar = () => {},
  ...otherProps
}) => {
  return (
    <header className="header header-sticky mb-4">
      <div className="container-fluid">
        <button className="header-toggler px-md-0 me-md-3" type="button">
          <MenuRoundedIcon className="icon icon-lg" onClick={onToggleSidebar} />
        </button>
      </div>
      <div className="header-divider"></div>
      <Breadcrumbs>{breadcrumbs}</Breadcrumbs>
    </header>
  );
};

export default HeaderNav;
