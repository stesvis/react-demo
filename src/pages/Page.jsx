import React, { useState } from "react";

import HeaderNav from "../components/header/HeaderNav";
import SidebarNav from "../components/sidebar/SidebarNav";

const Page = ({ breadcrumbs, children, ...otherProps }) => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <>
      <SidebarNav visible={sidebarVisible} />

      <div className="wrapper d-flex flex-column min-vh-100 bg-light dark:bg-transparent">
        <HeaderNav
          breadcrumbs={breadcrumbs}
          onToggleSidebar={() => setSidebarVisible(!sidebarVisible)}
        />
        <div className="body flex-grow-1 px-3">
          <div className="container-lg">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Page;
