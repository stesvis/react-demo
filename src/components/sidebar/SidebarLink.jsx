import { Link } from "react-router-dom";
import React from "react";

const SidebarLink = ({
  badgeStyleType,
  badgeTitle,
  IconComponent,
  path,
  styleType,
  title,
  ...otherProps
}) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={path}>
        {IconComponent && <IconComponent className="nav-icon" />}
        {title}
        {badgeTitle && (
          <span className={`badge badge-sm ${badgeStyleType} ms-auto`}>
            {badgeTitle}
          </span>
        )}
      </Link>
    </li>
  );
};

export default SidebarLink;
