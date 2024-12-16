import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-body clean-navbar">
        <div className="logo">
         {/* <img src="../assets/img/logo.jpg" alt="Logo" /> */}
        </div>
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            Tarwada Bus
          </Link>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/services"
                  style={{ color: "#070606" }}
                >
                  خدمات الشركة
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/about"
                  style={{ color: "var(--bs-navbar-active-color)" }}
                >
                  لمحة عن الشركة
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/registration"
                  style={{ color: "var(--bs-emphasis-color)" }}
                >
                  انشاء حساب جديد
                </Link>
                <Link className="nav-link" to="/login">
                  تسجيل الدخول
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
