import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Parse from 'parse';

const UserDashboard = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0;" />
  <title>User Dashboard</title>
  <link rel="stylesheet" href="css/bootstrap-grid.css" />
  <link rel="stylesheet" href="css/userdashstyle.css" />
  <link rel="stylesheet" href="css/css-comps.css" />
  <link rel="stylesheet" href="css/re575.css" />
  <link rel="stylesheet" href="css/re768.css" />
  <link rel="stylesheet" href="css/re991.css" />
  <link rel="stylesheet" href="css/re1200.css" />
  <link
    href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <div className="right-side-block">
    <aside>
      <span className="material-icons material-icons-outlined bars">menu</span>
      <div className="profile-block">
        <div className="profile__img">
          <img src="img/profile-image.png" alt="Profile Image" />
        </div>
        {/* <span class="profile__name" id="username">اسم العميل</span> */}
        <span className="profile__name" id="username">
          اسم العميل
        </span>
      </div>
      <br />
      <ul>
        <li id="home" className="is-active">
          <a href="user_dashboard.html">
            <span className="material-icons material-icons-outlined ic">
              dashboard
            </span>
            الرئيسية
          </a>
        </li>
        <li id="reservations">
          <a href="reservations.html">
            <span className="material-icons material-icons-outlined ic">
              table_view
            </span>
            جدول حجوزاتي
          </a>
        </li>
      </ul>
    </aside>
  </div>
  <div className="left-side-block">
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 header-block">
            <div className="header__right">
              <a href="#" className="menu-icon bars">
                <div className="material-icons md-24 material-icons-outlined">
                  menu
                </div>
              </a>
            </div>
            <div className="header__left">
              {/* <div class="notification">
                      <a href="">
                          <span class="material-icons material-icons-outlined notif__icon">notifications</span>
                      </a>
                  </div> */}
              <a href="../login.html" id="logout-icon">
                <span
                  className="material-icons material-icons-outlined"
                  title="logout"
                >
                  exit_to_app
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div className="row mt-3">
        <div className="col-12 col-lg-6 col-xl-3 my-2">
          <div className="top-card jf-box row">
            <div className="col-3 top-card-number">
              <p>01</p>
            </div>
            <div className="col-9">
              <b> حجز مقعد جديد</b>
              <br />
              <a href="new-ticket.html" target="_blank">
                {" "}
                اضغط هنا <span>»</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-3 my-2">
          <div className="top-card jf-box row">
            <div className="col-3 top-card-number">
              <p>02</p>
            </div>
            <div className="col-9">
              <b> الغاء حجز</b>
              <br />
              <a href="reservations.html" target="_blank">
                {" "}
                اضغط هنا <span>»</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-3 my-2">
          <div className="top-card jf-box row">
            <div className="col-3 top-card-number">
              <p>03</p>
            </div>
            <div className="col-9">
              <b>استعلام عن حجوزاتك</b>
              <br />
              <a href="reservations.html">
                {" "}
                اضغط هنا <span>»</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-3 my-2">
          <div className="top-card jf-box row">
            <div className="col-3 top-card-number">
              <p>04</p>
            </div>
            <div className="col-9">
              <b>للمساعدة</b>
              <br />
              <a href="">
                اضغط هنا<span>»</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</>

    </div>
    
  );
}

export default UserDashboard;
