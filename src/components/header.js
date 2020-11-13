import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";

import "./style.scss";

import Navbar from "./navbar";

const Header = ({ siteTitle }) => (
  <section className="hero gradientBg is-fullheight">
    <Navbar />
    <div className="hero-body">
      <div className="container center">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <h1 className="is-uppercase is-size-1 has-text-white">
                Welcome to Kellen Busby Software LLC
              </h1>
              <p className="subtitle has-text-white is-size-3">
                Want to work with me?{" "}
                <a
                  className="button is-info is-inverted"
                  href="mailto:kellenbusby@gmail.com"
                >
                  <span className="icon">
                    <FaEnvelope size="fa-2x" />
                  </span>
                  <span>Email Me</span>
                </a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Header;
