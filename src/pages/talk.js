import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer/simple-footer.js";

const About = ({ data }) => (
  <div>
  <Header data={data} />
  <main>
    <div className="wrap">
      <div className="row">
        <div className="column">

          <div className="row">

            <div className="column medium-6">

            <h1>Talk on the podcast</h1>

            <p>Please fill in the form to get in touch, alternatively send me an emai to uxeskimo@gmail.com</p>

            <form name="talk-form" method="POST" action=""/pages/index" netlify>
              <label>Your Name: <input type="text" name="name" /></label>
              <label>Your Email: <input type="email" name="email" />
              </label>
              <label>What would you like to talk about? <textarea name="message"></textarea></label>
              <button type="submit">Send</button>
            </form>


            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer data={data} />
  </div>
);

export default About;
