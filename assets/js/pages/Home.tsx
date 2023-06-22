import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Apple from "../components/Layouts/Apple";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // Apple = Extend
    <Apple>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <div className="layout-page">
            <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar"
            >
              <div
                className="navbar-nav-right d-flex align-items-center"
                id="navbar-collapse"
              >
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                  <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a
                      className="nav-link dropdown-toggle hide-arrow"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      <div className="avatar avatar-online">
                        <img
                          src="../../assets/img/avatars/1.png"
                          alt=""
                          className="h-auto rounded-circle"
                        />
                      </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item"
                          href="pages-account-settings-account.html"
                        >
                          <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                              <div className="avatar avatar-online">
                                <img
                                  src="../../assets/img/avatars/1.png"
                                  alt=""
                                  className="h-auto rounded-circle"
                                />
                              </div>
                            </div>
                            <div className="flex-grow-1">
                              <span className="fw-semibold d-block">
                                John Doe
                              </span>
                              <small className="text-muted">Admin</small>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div className="dropdown-divider"></div>
                      </li>
                      <li>
                        <Link className="dropdown-item" to={`/admin/login`}>
                          <i className="ti ti-user-check me-2 ti-sm"></i>
                          <span className="align-middle">Login</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </Apple>
  );
};

export default Home;
