import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Parse from 'parse';
import Navbar from "../comp/Navbar";
import Footer from "../comp/Footer";

const Registration = () => {
  const navigate = useNavigate(); // الحصول على دالة التنقل

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "../assets/bootstrap/js/bootstrap.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "https://unpkg.com/parse/dist/parse.min.js";
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      Parse.initialize("4PQmzoc4qvrK8L21r91x2WebagCoXXdxxsbxlLzu", "qxtI4vBiDsXvkK7DjGRIywVRhLOqgEW4v5ThoEaN");
      Parse.serverURL = 'https://parseapi.back4app.com/parse';

      document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const nationalId = document.getElementById('nationalId').value;
        const password = document.getElementById('password').value;
        const mobileNumber = document.getElementById('mobileNumber').value;

        const user = new Parse.User();
        user.set('username', username);
        user.set('password', password);
        user.set('nationalId', nationalId);
        user.set('mobileNumber', mobileNumber);

        user.signUp().then((user) => {
          alert('تم تسجيل الحساب بنجاح!');
          navigate('/login'); // الانتقال إلى صفحة تسجيل الدخول
        }).catch((error) => {
          alert('Error: ' + error.message);
        });
      });
    };

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, [navigate]);

  return (
    <>
      <Navbar />
      <main className="page">
        <section className="clean-block clean-form dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info">انشاء حساب جديد</h2>
            </div>
            <form id="registrationForm">
              <div className="mb-3">
                <label className="form-label" htmlFor="username">
                  الاسم
                </label>
                <input
                  className="form-control item"
                  type="text"
                  id="username"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  كلمة المرور
                </label>
                <input
                  className="form-control item"
                  type="password"
                  id="password"
                  required=""
                />
              </div>
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
                <label className="form-label" htmlFor="mobileNumber">
                  رقم الموبايل
                </label>
                <input
                  className="form-control item"
                  type="text"
                  id="mobileNumber"
                  required=""
                />
              </div>
              <button className="btn btn-primary" type="submit">
                تسجيل
              </button>
            </form>
          </div>
          
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Registration;
