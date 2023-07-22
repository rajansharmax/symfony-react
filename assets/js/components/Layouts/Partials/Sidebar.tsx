import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import menuItems from "./menu/MenuItem";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [collapsedItems, setCollapsedItems] = useState<{[key: string]: boolean;}>({});

  const toggleCollapse = (itemId: string) => {
    setCollapsedItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  const isItemCollapsed = (itemId: string) => collapsedItems[itemId];

  const menuClasses = (itemId: string) => {
    const isItemCollapsing = collapsedItems[itemId] && !isItemCollapsed(itemId);
    return `menu-item ${isItemCollapsing ? "menu-item-animating menu-item-closing" : ""
      }`;
  };

  const isMenuItemActive = (to: string) => {
    return location.pathname.includes(to);
  };

  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo">
            <svg
              width="32"
              height="22"
              viewBox="0 0 32 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                fill="#7367F0"
              />
              <path
                opacity="0.06"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                fill="#161616"
              />
              <path
                opacity="0.06"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                fill="#161616"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                fill="#7367F0"
              />
            </svg>
          </span>
          <span className="app-brand-text demo menu-text fw-bold">Vuexy</span>
        </a>
        <Link
          to="#"
          className="layout-menu-toggle menu-link text-large ms-auto"
        >
          <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
          <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
        </Link>
        {/* <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
            <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
            <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
          </a> */}
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {menuItems.map((menuItem) => (
          <li
            key={menuItem.id}
            className={`menu-item 
            ${menuClasses(menuItem.id)} 
            ${isMenuItemActive(`/${menuItem.id}`) ? "active" : ""} 
            ${isItemCollapsed(menuItem.id) ? "open" : ""}`}
            onClick={() => toggleCollapse(menuItem.id)}
          >
            <Link to="#" className="menu-link menu-toggle">
              <i className={`menu-icon tf-icons ti ${menuItem.icon}`}></i>
              <div data-i18n={menuItem.i18}>{menuItem.label}</div>
              <div className="badge bg-label-primary rounded-pill ms-auto">
                {menuItem.subItems.length}
              </div>
            </Link>
            <ul className="menu-sub">
              {menuItem.subItems.map((subItem) => (
                <li key={subItem.id} className="menu-item">
                  <Link
                    to={`/${menuItem.id}/${subItem.id}`}
                    className="menu-link"
                  >
                    <div>{subItem.label}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
