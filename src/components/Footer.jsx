import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "", badge, frameDivTop, frameDivLeft }) => {
  const footerStyle = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  return (
    <footer
      className={`footer ${className}`}
      id="1"
      footer1
      style={footerStyle}
    >
      <div className="rectangle-parent">
        <footer className="rectangle-footer" id="Footer" />
        <div className="group-child1" />
        <div className="frame-parent49">
          <div className="frame-parent50">
            <div className="bali-melody-store-parent1">
              <div className="bali-melody-store3">Bali Melody Store</div>
              <div className="musik-adalah-bagian">
                Musik adalah Bagian dari Jiwa
              </div>
            </div>
            <div className="social">
              <a
                className="twitter"
                href="https://twitter.com/?lang=ind"
                target="_blank"
              >
                <img className="bg-icon" alt="" src="/bg.svg" />
                <img className="bg-icon" alt="" src="/bg-stroke.svg" />
                <img
                  className="logo-twitter-2-icon"
                  alt=""
                  src="/logotwitter-2.svg"
                />
              </a>
              <a className="facebook" href="https://id-id.facebook.com/">
                <img className="bg-icon" alt="" src="/bg.svg" />
                <img
                  className="logo-fb-simple-2-icon"
                  alt=""
                  src="/logofbsimple-2.svg"
                />
              </a>
              <a className="instagram" href="https://www.instagram.com/">
                <img className="bg-icon" alt="" src="/bg.svg" />
                <img className="bg-icon" alt="" src="/bg-stroke.svg" />
                <img
                  className="logo-instagram-1-icon"
                  alt=""
                  src="/logoinstagram-1.svg"
                />
              </a>
              <a className="github" href="https://github.com/">
                <img className="bg-icon" alt="" src="/bg.svg" />
                <img className="bg-icon" alt="" src="/bg-stroke.svg" />
                <img
                  className="logo-github-1-icon"
                  alt=""
                  src="/logogithub-1.svg"
                />
              </a>
            </div>
          </div>
          <div className="help-menu-parent">
            <div className="help-menu">Company</div>
            <div className="about-features-works-container">
              <p className="about">{`About          `}</p>
              <p className="blank-line">&nbsp;</p>
              <p className="about">{`Features          `}</p>
              <p className="blank-line">&nbsp;</p>
              <p className="about">{`Works          `}</p>
              <p className="blank-line">&nbsp;</p>
              <p className="about">{`Career  `}</p>
            </div>
          </div>
          <div className="help-menu-parent">
            <div className="help-menu">Help</div>
            <div className="about-features-works-container1">
              <p className="blank-line">Customer Support</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">Delivery Details</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">{`Terms & Conditions`}</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">Privacy Policy</p>
            </div>
          </div>
          <div className="help-menu-parent">
            <div className="help-menu">FAQ</div>
            <div className="about-features-works-container2">
              <p className="blank-line">Account</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">Manage Deliveries</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">Orders</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">Payments</p>
            </div>
          </div>
          <div className="help-menu-parent">
            <div className="help-menu">Resources</div>
            <div className="about-features-works-container">
              <p className="blank-line">Free eBooks</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">Development Tutorial</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">How to - Blog</p>
              <p className="blank-line">&nbsp;</p>
              <p className="blank-line">Youtube Playlist</p>
            </div>
          </div>
        </div>
        <div className="badge-parent">
          <img className="badge-icon" alt="" src="/badge.svg" />
          <img className="badge-icon" alt="" src="/badge1.svg" />
          <img className="badge-icon" alt="" src={badge} />
          <img className="badge-icon" alt="" src="/badge3.svg" />
          <img className="badge-icon" alt="" src="/badge4.svg" />
        </div>
        <div className="all-rights-reserved">
          Bali Melody Store © 2000-2023, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  badge: PropTypes.string,

  /** Style props */
  frameDivTop: PropTypes.any,
  frameDivLeft: PropTypes.any,
};

export default Footer;
