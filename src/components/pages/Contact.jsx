import React from "react";
import "../../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">CONTACT</h2>
      <div className="contact-sections">
        {/* MANAGEMENT */}
        <div className="contact-column">
          <h3 className="column-heading">MANAGEMENT</h3>
          <h4 className="sub-heading">MAINSTAY ENTERTAINMENT</h4>
          <div className="contact-item">
            <p className="name">Norm Aladjem</p>
            <p className="email">
              <a href="mailto:norm@mainstayentertainment.com">
                norm@mainstayentertainment.com
              </a>
            </p>
            <p className="phone">+1 310 860 2880</p>
          </div>
          <div className="contact-item">
            <p className="name">Derek Van Pelt</p>
            <p className="email">
              <a href="mailto:derek@mainstayentertainment.com">
                derek@mainstayentertainment.com
              </a>
            </p>
            <p className="phone">+1 310 860 2880</p>
          </div>
        </div>

        {/* AGENCY */}
        <div className="contact-column">
          <h3 className="column-heading">AGENCY</h3>
          <h4 className="sub-heading">CAA</h4>
          <div className="contact-item">
            <p className="name">TV/Film | Rachel Rusch</p>
            <p className="email">
              <a href="mailto:rrusch@caa.com">rrusch@caa.com</a>
            </p>
            <p className="phone">+1 424 288 2000</p>
          </div>
          <div className="contact-item">
            <p className="name">Live Performances | Matt Blake</p>
            <p className="email">
              <a href="mailto:mblake@caa.com">mblake@caa.com</a>
            </p>
            <p className="phone">+1 424 288 2000</p>
          </div>
        </div>

        {/* PUBLICITY */}
        <div className="contact-column">
          <h3 className="column-heading">PUBLICITY</h3>
          <h4 className="sub-heading">JILL FRITZO PUBLIC RELATIONS</h4>
          <div className="contact-item">
            <p className="name">Jill Fritzo</p>
            <p className="email">
              <a href="mailto:jfritzo@jillfritzopr.com">
                jfritzo@jillfritzopr.com
              </a>
            </p>
            <p className="phone">+1 917 410 5441</p>
          </div>
          <div className="contact-item">
            <p className="name">TREVOR NOAH FOUNDATION</p>
            <p className="foundation-link">
              <a
                href="https://trevornoahfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://trevornoahfoundation.org
              </a>
            </p>
            <p className="name">Shalane Yuen</p>
            <p className="email">
              <a href="mailto:info@trevornoahfoundation.org">
                info@trevornoahfoundation.org
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Social icons (if needed) */}
      <div className="contact-social-icons">
        {/* replace # with your actual social links */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </div>
    </div>
  );
};

export default Contact;
