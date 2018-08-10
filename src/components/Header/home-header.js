import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

import logo from "../../images/dc-logo.svg";
import menu from "../../images/mobile-menu.svg";
import hero from "../../images/video-pic.png";

const HeaderWrapper = styled.div`
  background-image: linear-gradient(0deg, #E1F6E9 0%, #99C6D3 100%, #D8D8D8 100%);
  overflow: hidden;
  position: relative;
  padding-bottom: 32px;
  p {
    margin-bottom: 0;
  }
`;

const HeaderContainer = styled.div`
    padding-top: 8px;
`;


export default class Header extends Component {
  render() {
    return (
     <HeaderWrapper>
          <header className="home-header">
          <div className="wrap">
            <div className="top-content">
              <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="Digital Coalface Logo" />
                    </Link>
              </div>
                <Link to="/" id="primary-trigger" className="mobile-menu-toggle">
                   <img src={menu} alt="Menu" />
                </Link>

                <nav className="primary-nav">
                  <ul>
                    <li><Link to="/podcasts">Podcasts</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/talk">Talk on the digital coalface</Link></li>
                  </ul>
                </nav>
             </div>
            <h1 className="home-heading">Podcasts about the people from the frontline in digital</h1>
            <p>Getting to the <strong>heart</strong> of digital</p>

            <img src={hero} className="hero" alt="Digital Coalface - Lee Murray" />
            <Link to="/" className="btn">
                Listen now
            </Link>
              </div>
         </header>

      </HeaderWrapper>
    );
  }
}
