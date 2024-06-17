import {Link} from "react-router-dom";
import './Footer.scss';
import logo2 from '../../assets/logo-2.png';

export const Footer = () => {
      return (
            <footer className="footer">
                  <div className="shell">
                        <div className="footer__container">
                              <div className="footer__inner">
                                    <Link to="/" className="footer__logo">
                                          <img src={logo2} alt="" />
                                    </Link>

                                    <div className="footer__menu">
                                          <nav className="footer__nav">
                                                <ul>
                                                      <li>
                                                            <Link to="/blog">Blog</Link>
                                                      </li>

                                                      <li>
                                                            <Link to="/contacts">Contacts</Link>
                                                      </li>
                                                </ul>
                                          </nav>
                                    </div>
                              </div>

                              <div className="footer__copyright">
                                    <p>&copy;Copyright 2024 | All Rights Reserved.</p>
                              </div>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
