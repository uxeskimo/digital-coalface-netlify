import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import Toggle from '../ToggleChildrenProp';

import logo from "../../images/dc-logo.svg";
import menu from "../../images/mobile-menu.svg";

const HeaderWrapper = styled.div`
  background-image: linear-gradient(0deg, #E6FAEE 0%, #9CC6D1 100%, #D1D1D1 100%);
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

                <nav className="primary-nav">
                  <ul>
                    <li><Link to="/episodes">Episodes</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/talk">Talk <span>on the digital coalface</span></Link></li>
                  </ul>
                </nav>

             </div>
            <h1 className="home-heading">Podcasts about the people from the frontline in digital</h1>
            <p>Getting to the <strong>heart</strong> of digital</p>

            <div className="video-wrap">
                <iframe src="https://player.vimeo.com/video/277845977" title="Digital Coalface Introduction" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>

            <div className="row">

              <div className="column medium-6 margin-bh">
                   <Link to="/episodes" className="btn">
                     Listen now
                   </Link>
              </div>

                <div className="column medium-6">
                   <Link to="/talk" className="btn white-bg">
                     Talk on the digital coalface
                  </Link>
              </div>
             </div>

              </div>
         </header>

      </HeaderWrapper>
    );
  }
}
