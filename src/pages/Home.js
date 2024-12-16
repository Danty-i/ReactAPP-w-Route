import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles2.css";
import "../assets/css/baguetteBox.min.css";
import "../assets/css/Footer-with-social-media-icons-1.css";
import "../assets/css/Footer-with-social-media-icons.css";
// import "../assets/bootstrap/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//==========================
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
//==============================

import Navbar from "../comp/Navbar"
import Footer from "../comp/Footer"

const Home = () => {
  return (
    <>
      
    <Navbar />
      <main className="page">
        <section
          className="clean-block clean-hero"
          style={{
            color: "rgba(62,66,68,0.85)",
            background: 'url("assets/img/BG.jpg") center / cover no-repeat',
          }}
        >
          <div className="text">
            <h2
              style={{
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                marginBottom: "-98px",
              }}
            >
              <span style={{ color: "rgb(5, 5, 5)" }}>
                شركة طروادة للنقل و الشحن
              </span>
              <br />
              <br />
              <br />
              <br />
            </h2>
            <p>
              هي شركة للنقل المحلي
              <br /> ضمن سوريا و تحديدا النقل بين حلب و حمص و دمشق ، تعتمد في
              عملها كادر بشري&nbsp; للتعامل مع العملاء و الإجابات على
              استفساراتهم و ترتيب حجوزات السفر ، يتم النقل من خلال بولمانات
              حديثة بين كراجات المحافظات المذكزرة انفا
              <br />
              <br />
              <br />
            </p>
          </div>
        </section>
        <section className="clean-block features">
          <div className="container" style={{ direction: "rtl" }}>
            <div className="block-heading">
              <h2 className="text-info" id="services">
                <br />
                <span style={{ color: "rgb(62, 64, 162)" }}>خدمات الشركة</span>
                <br />
                <br />
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5 feature-box">
                <h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-truck icon"
                  >
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                  </svg>
                  شحن البضائع
                </h4>
                <p>
                  <span style={{ color: "rgb(45, 66, 83)" }}>
                    تسعى شركة طراودة لتقدم لزبائنها الكرام أفضل خدمات النقل و
                    الشحن بين مكاتبها في كافة المحافظات السورية .
                  </span>
                  <br />
                  <br />
                  <br />
                </p>
              </div>
              <div className="col-md-5 feature-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-bus-front icon"
                >
                  <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.303 44.303 0 0 0 8 4m0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44.304 44.304 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43.306 43.306 0 0 0 8 3" />
                  <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A43.61 43.61 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2zM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A42.611 42.611 0 0 1 8 1" />
                </svg>
                <h4>
                  <span style={{ color: "rgb(62, 64, 162)" }}>
                    نقل المسافرين
                  </span>
                </h4>
                <p>
                  <span style={{ color: "rgb(45, 66, 83)" }}>
                    تسعى شركة طراودة لتقدم لزبائنها الكرام أفضل خدمات النقل و
                    الشحن بين مكاتبها في كافة المحافظات السورية .
                  </span>
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block slider dark">
          <div className="container-fluid">
            {" "}
            {/* تعديل هنا إلى container-fluid */}
            <div className="block-heading">
              <h2 className="text-info">
                طروادة
                <br />
                <br />
              </h2>
              <p>
                <br />
                <span
                  style={{
                    color: "rgb(5, 5, 5)",
                    backgroundColor: "rgb(255, 255, 255)",
                  }}
                >
                  مفهوم اخر للنقل و الشحن في سوريا{" "}
                </span>
                <br />
                <br />
              </p>
            </div>
            <div
              className="carousel slide"
              data-bs-ride="carousel"
              id="carousel-1"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="w-100 d-block"
                    src="assets/img/scenery/slide1.jpg"
                    alt="Slide Image"
                    style={{ width: "100vw", height: "auto" }}
                  />{" "}
                  {/* تعديل هنا */}
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 d-block"
                    src="assets/img/scenery/slide2.jpg"
                    alt="Slide Image"
                    style={{ width: "100vw", height: "auto" }}
                  />{" "}
                  {/* تعديل هنا */}
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100 d-block"
                    src="assets/img/scenery/slide3.jpg"
                    alt="Slide Image"
                    style={{ width: "100vw", height: "auto" }}
                  />{" "}
                  {/* تعديل هنا */}
                </div>
              </div>
              <div>
                <a
                  className="carousel-control-prev"
                  href="#carousel-1"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carousel-1"
                  role="button"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                  <span className="visually-hidden">Next</span>
                </a>
              </div>
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carousel-1"
                  data-bs-slide-to={0}
                  className="active"
                />
                <button
                  type="button"
                  data-bs-target="#carousel-1"
                  data-bs-slide-to={1}
                />
                <button
                  type="button"
                  data-bs-target="#carousel-1"
                  data-bs-slide-to={2}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="clean-block">
          <div className="container" style={{ direction: "rtl" }}>
            <div id="about" className="block-heading">
              <h2 className="text-info">لمحة عن الشركة</h2>
              <p>
                <br />
                <span style={{ color: "rgb(45, 66, 83)" }}>
                  &nbsp;اصبحت شركة طراودة من أكبر شركات النقل الخاصة في سوريا
                  &nbsp;من حيث الإنتشار بخدماتها&nbsp;بمجال شحن الطرود و
                  المغلفات&nbsp; ,&nbsp;ومن خلال كادر اداري وفني مدرب ومؤهل ضمن
                  سلسلة مكاتبها&nbsp;&nbsp;المنتشرة في كافة المحافظات
                  السورية&nbsp;و أما في مجال نقل الركاب و المجموعات السياحية
                  فقامت شركة طراودة بتغيير حقيقي في طبيعة النقل بالنسبة للمواطن
                  السوري فلم يعد هم التنقل قائماً بفضل شبكة رحلات السفر اليومية
                  بين كافة المحافظات السورية .
                </span>
                <br />
                <br />
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="card text-center clean-card">
                  <img
                    className="card-img-top w-100 d-block"
                    src="assets/img/avatars/about1.jpg"
                  />
                  <div className="card-body info" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card text-center clean-card">
                  <img
                    className="card-img-top w-100 d-block"
                    src="assets/img/avatars/about2.jpg"
                  />
                  <div className="card-body info" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="card text-center clean-card">
                  <img
                    className="card-img-top w-100 d-block"
                    src="assets/img/avatars/about3.jpg"
                  />
                  <div className="card-body info" />
                </div>
              </div>
            </div>
          </div>
          
          <Footer/ >
        </section>
      </main>
    </>
  );
};

export default Home;
