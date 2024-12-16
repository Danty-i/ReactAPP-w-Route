import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer id="footerpad-2">
            <footer id="footerpad">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-8 mx-auto">
                    <ul className="list-inline text-center">
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x" />
                            <i className="fab fa-linkedin fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x" />
                            <i className="fab fa-youtube fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x" />
                            <i className="fab fa-snapchat fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x" />
                            <i className="fab fa-reddit fa-stack-1x fa-inverse" />
                          </span>
                        </a>
                      </li>
                    </ul>
                    <p className="copyright text-muted text-center">
                      Copyright © Tarwada 2024
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </footer>
    </div>
  );
}

export default Footer;
