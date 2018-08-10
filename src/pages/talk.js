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

           <form
          name="talk-form"
          method="post"
          action="/index.html"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="talk-form" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
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
