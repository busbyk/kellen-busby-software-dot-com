import React from "react";
import { FaGithub } from "react-icons/fa";

import "./style.scss";

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <nav className="navbar">
      <div className="container">
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">
              <a
                className="button is-ghost is-inverted"
                href="https://github.com/busbyk"
              >
                <span className="icon">
                  <FaGithub size="fa-2x" />
                </span>
                <span>busbyk</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
