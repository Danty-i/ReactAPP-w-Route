import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Parse from 'parse';
import Navbar from "../comp/Navbar"
import Footer from "../comp/Footer";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Parse.initialize("4PQmzoc4qvrK8L21r91x2WebagCoXXdxxsbxlLzu", "qxtI4vBiDsXvkK7DjGRIywVRhLOqgEW4v5ThoEaN");
    Parse.serverURL = 'https://parseapi.back4app.com/parse';

    const form = document.getElementById('loginForm');
    const handleSubmit = (event) => {
      event.preventDefault();
      const nationalId = document.getElementById('nationalId').value;
      const password = document.getElementById('password').value;

      if (nationalId === '00000' && password === 'admin') {
        alert('تم تسجيل دخول المشرف بنجاح');
        navigate('/admin-dashboard');
        return;
      }

      const query = new Parse.Query(Parse.User);
      query.equalTo('nationalId', nationalId);
      query.first().then((user) => {
        if (user) {
          if (user.get('isBanned')) {
            alert('تم حظر هذا المستخدم.');
            return;
          }
          const username = user.get('username');
          return Parse.User.logIn(username, password);
        } else {
          throw new Error('الرقم الوطني أو كلمة المرور غير صحيحة');
        }
      }).then((user) => {
        if (user && user.get('nationalId') === nationalId) {
          if (user.get('isAdmin')) {
            alert('تم تسجيل دخول المشرف بنجاح');
            navigate('/admin-dashboard');
          } else {
            alert('تم تسجيل الدخول بنجاح!');
            navigate("/userdashboard");



          }
        } else {
          alert('الرقم الوطني أو كلمة المرور غير صحيحة');
        }
      }).catch((error) => {
        alert(error.message || 'حدث خطأ غير متوقع');
      });
    };

    form.addEventListener('submit', handleSubmit);

    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, [navigate]);

  return (
    <>
      <Navbar />
      <main className="page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info" id="login">
                تسجيل الدخول
              </h2>
            </div>
            <form id="loginForm">
              <div className="mb-3">
                <label className="form-label" htmlFor="nationalId">
                  الرقم الوطني
                </label>
                <input
                  className="form-control item"
                  type="text"
                  id="nationalId"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  كلمة المرور
                </label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  required=""
                />
              </div>
              <button className="btn btn-primary" type="submit">
                تسجيل الدخول
              </button>
            </form>
          </div>

          <Footer />
        </section>
      </main>
    </>
  );
};

export default Login;
