import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import Toggle from '../ToggleChildrenProp';

import logo from "../../images/dc-logo.svg";
import menu from "../../images/mobile-menu.svg";

const HeaderWrapper = styled.div`
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
        <header>
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
                        <li><Link to="/podcasts">Podcasts</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/talk">Talk on the digital coalface</Link></li>
                      </ul>
                     </nav>}
                  </div>
                )}
             </Toggle>

            <nav className="primary-nav">
               <ul>
                  <li><Link to="/podcasts">Podcasts</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/talk">Talk on the digital coalface</Link></li>
               </ul>
            </nav>
            </div>
         </div>
        </header>

      </HeaderWrapper>
    );
  }
}
