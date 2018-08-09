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

            <form
              name="talk-form"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field" >
              <label for="full-name">Full name</label>
              <input type="text" name="full-name" id="full-name"/>
              <label forfull-name="" className="">Email</label>
              <input name="email" type="email" />
              <label for="message">What would you like to talk about?</label>
              <textarea name="message" />
              <button className="btn">Send</button>
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
