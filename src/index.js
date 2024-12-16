/* import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import "./index.css";
import UserDashboard from "./pages/UserDashboard/User_dashboard";


// import "./assets/css/styles2.css";
// import "./assets/css/Vazir.css";
// import "./assets/bootstrap/css/bootstrap.min.css";

// تعريف المسارات
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1> SORRY..........</h1>
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/userdashboard",
    element: <UserDashboard />,
  },
]);

// إنشاء جذر التطبيق
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

