import { CiFacebook } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import "./index.css";

const InformationPage = () => {
  return (
    <div className="main-footer-container">
      <div className="info-page">
        <div className="info-container">
          <img
            className="image-logo"
            src="https://i.postimg.cc/T14sLhH5/logo.png"
            alt="logo"
          />
          <p>
            Welcome to Opam Technologies! With over 4 years of experience in the
            IT industry, we specialize in app and website development, UI/UX
            design, digital marketing, SEO optimization, and platform
            development including WordPress and Shopify Let's collaborate to
            elevate your brand's digital presence and drive success together!
          </p>
          <div className="social-icon">
            <div className="icons">
              <CiFacebook />
            </div>
            <div className="icons">
              <FaPinterestP />
            </div>
            <div className="icons">
              <FaTwitter />
            </div>
            <div className="icons">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="info-container">
          <h1>IT Services</h1>
          <p>Software Development</p>
          <p>Web Development</p>
          <p>Analytic Solutions</p>
          <p>Cloud and DevOps</p>
          <p>Product Design</p>
        </div>
        <div className="info-container">
          <h1>Contact Info</h1>
          <div className="info-container-details">
            <div className="info-icon">
              <CiLocationOn />
            </div>
            <div>
              <p>Prayagraj UP 374FA Tower,</p>
              <p>William S Blvd 2721 , IL, USA</p>
            </div>
          </div>
          <div className="info-container-details">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div>
              <p>+919004504998</p>
            </div>
          </div>
          <div className="info-container-details">
            <div className="info-icon">
              <MdOutlineEmail />
            </div>
            <div>
              <p>info@opamtech.co.in</p>
            </div>
          </div>
          <div className="info-container-details">
            <div className="info-icon">
              <FaLink />
            </div>
            <div>
              <p>https://opamtech.co.in</p>
            </div>
          </div>
          <div className="info-container-details">
            <div className="info-icon">
              <FaRegClock />
            </div>
            <div>
              <p>10:00 AM to 6:00 PM Mon to Sat.</p>
            </div>
          </div>
        </div>
        <div className="info-container">
          <h1>News Letter</h1>
          <p>
            We denounce with righteous indignation in and dislike men who are so
            beguiled and to demo realized.
          </p>
          <div className="email-newsletter">
            <input
              className="news-letter"
              type="email"
              placeholder="email"
              required
            />
            <button className="newsletterbtn">
              <IoIosSend />
            </button>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div>
          <p>
            @2024 All Rights Reserved. Design & Development by Naresh Bodapatla
          </p>
        </div>
        <div className="footer-routes">
          <div>
            <p onClick="#">Home</p>
          </div>
          <div>
            <p onClick="#">About</p>
          </div>
          <div>
            <p onClick="#">Blog</p>
          </div>
          <div>
            <p onClick="#">Shop</p>
          </div>
          <div>
            <p onClick="#">FAQ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
