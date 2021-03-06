import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import Toggle from '../ToggleChildrenProp';

import logo from "../../images/dc-logo.svg";

const HeaderWrapper = styled.div`
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

            <nav className="primary-nav">
               <ul>
                  <li><Link to="/episodes">Episodes</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/talk">Talk <span>on the digital coalface</span></Link></li>
               </ul>
            </nav>
            </div>
         </div>
        </header>

      </HeaderWrapper>
    );
  }
}
