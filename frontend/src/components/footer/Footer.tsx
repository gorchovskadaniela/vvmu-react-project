import {Link} from "react-router-dom";
import './Footer.css';

export const Footer = () => {
      return (
            <footer className="footer">
                  <div className="footer__inner">
                        <Link to="/home">
                              <img src="assets/images/temp/" alt="" />
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
            </footer>
      );
};

export default Footer;
