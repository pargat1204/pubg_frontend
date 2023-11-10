import React from "react";
import { Link } from "react-router-dom";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/hiddenLink";

const Home = () => {
  return (
    <div>
      <section
        className="section hero hero-img"
        id="home"
        aria-label="home"
      >
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">PlayerUnknown's Battlegrounds</p>
            <h1 className="h1 hero-title">
              Upcoming<span className="span">Tournament</span>
            </h1>
            <h4 className="hero-text">
              September 25, 2018 - September 28, 2018 (100 Spots)
            </h4>
            <ShowOnLogout>
              <button className="btn skewBg">
                <Link to="/register">Register</Link>
              </button>
              <button className="btn skewBg">
                <Link to="/login">Login</Link>
              </button>
            </ShowOnLogout>
          </div>
        </div>
      </section>
      <section className="newsletter" aria-label="newsletter">
        <div className="container">
          <div className="newsletter-card">
            <h2 className="h2">
              Our <span className="span">Newsletter</span>
            </h2>
            <form action="" className="newsletter-form">
              <div className="input-wrapper skewBg">
                <input
                  type="email"
                  name="email_address"
                  aria-label="email"
                  placeholder="Enter your email..."
                  required=""
                  className="email-field"
                />
                <ion-icon name="mail-outline" />
              </div>
              <button type="submit" className="btn newsletter-btn skewBg">
                <span className="span">Subscribe</span>
                <ion-icon name="paper-plane" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn=""
      >
        <ion-icon name="caret-up" />
      </a>

    </div>
  );
};

export default Home;
