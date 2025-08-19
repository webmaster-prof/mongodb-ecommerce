import "./Footer.scss";

import logo from "./../../assets/logo.png";
import Image from "next/image";
import instagram_icon from "./../../assets/instagram_icon.png";
import pintester_icon from "./../../assets/pintester_icon.png";
import whatsapp_icon from "./../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <Image className="footer__top-logo" src={logo} alt="logo" />
            <h1 className="footer__top-title">Shopper</h1>
          </div>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a className="footer__list-link" href="">
                Company
              </a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link" href="">
                Products
              </a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link" href="">
                Ofices
              </a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link" href="">
                About
              </a>
            </li>
            <li className="footer__list-item">
              <a className="footer__list-link" href="">
                Contact
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            <li className="footer__social-item">
              <a className="footer__social-link" href="">
                <Image src={instagram_icon} alt="social-icon" />
              </a>
            </li>
            <li className="footer__social-item">
              <a className="footer__social-link" href="">
                <Image src={pintester_icon} alt="social-icon" />
              </a>
            </li>
            <li className="footer__social-item">
              <a className="footer__social-link" href="">
                <Image src={whatsapp_icon} alt="social-icon" />
              </a>
            </li>
          </ul>
          <div className="footer__decor"></div>
          <div className="footer__copy">
            Copyright @ 2025 - All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
