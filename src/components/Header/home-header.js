import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import Toggle from '../ToggleChildrenProp';

import logo from "../../images/dc-logo.svg";
import menu from "../../images/mobile-menu.svg";

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
              <Toggle>
                {({ on, toggle }) => (
                  <div className="toggle-wrap">
                    <Link onClick={toggle} className="mobile-menu-toggle">
                       <img src={menu} alt="Menu" />
                    </Link>
                    {on && <nav className="mobile-nav">
                      <ul>
                        <li><Link to="/episodes">Episodes</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/talk">Talk on the digital coalface</Link></li>
                      </ul>
                     </nav>}
                  </div>
                )}
             </Toggle>


                <nav className="primary-nav">
                  <ul>
                    <li><Link to="/episodes">Episodes</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/talk">Talk on the digital coalface</Link></li>
                  </ul>
                </nav>
             </div>
            <h1 className="home-heading">Podcasts about the people from the frontline in digital</h1>
            <p>Getting to the <strong>heart</strong> of digital</p>

            <div className="video-wrap">
                <iframe src="https://player.vimeo.com/video/277845977" width="640" height="360" frameborder="0" allowfullscreen></iframe>
            </div>

            <div className="row">

              <div className="column medium-6 margin-bh">
                   <Link to="/podcasts" className="btn">
                     Listen now
                   </Link>
              </div>

                <div className="column medium-6">
                   <Link to="/talk" className="btn blue-bg">
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
