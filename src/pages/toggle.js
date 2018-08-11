import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer/simple-footer.js";
import Toggle from '../components/ToggleChildrenProp';

const About = ({ data }) => (
  <div>
  <Header data={data} />
  <main>


        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h1>Show and hide me</h1>}
              <button onClick={toggle}>Toggle</button>
            </div>
          )}
        </Toggle>

  </main>
  <Footer data={data} />
  </div>
);

export default About;
