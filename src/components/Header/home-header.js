import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";

import logo from "../../images/logo.svg";
import menu from "../../images/mobile-menu.svg";

const HeaderWrapper = styled.div`
  background-image: linear-gradient(0deg, #E1F6E9 0%, #99C6D3 100%, #D8D8D8 100%);
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? "70vh" : "20vh")};
  h1 {
    img {
      
    }
  }
`;

const HeaderContainer = styled.div`

`;

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === "/") {
        this.wrapper.animate([{ height: "20vh" }, { height: "70vh" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
      } else {
        this.wrapper.animate([{ height: "70vh" }, { height: "20vh" }], {
          duration: 300,
          fill: "forwards",
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        });
      }
    }
  };

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper
        isHome={location.pathname === "/"}
        ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))}
      >
        <HeaderContainer>
          <div className="wrap">
            <div className="row">
              <div className="column">
                <h1 className="logo">
                  <Link to="/">
                    <img src={logo} alt="Digital Coalface Logo" />
                  </Link>
                </h1> 
            <Link to="/" id="primary-trigger" className="mobile-menu-toggle">
               <img src={menu} alt="Menu" />
            </Link> 

            <nav className="primary-nav">
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
       
            </div> 
          </div>
          <h1>Podcasts about the people from the frontline in digital</h1>
          <p>Getting to the heart of digital</p>
          <Link to="/" className="btn">
              Listen now
          </Link> 
         </div>
        </HeaderContainer>
          
      </HeaderWrapper>
    );
  }
}
