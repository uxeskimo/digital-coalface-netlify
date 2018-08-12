import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer/";

const About = ({ data }) => (
  <div>
  <Header data={data} />
  <main>
    <div className="wrap">
      <div className="row">
        <div className="column">

          <div className="row">

            <div className="column">

            <h1>Talk on the podcast</h1>

            <div className="row">

            <div className="column medium-6">

                <form name="talk-form" method="post" action="thanks" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="talk-form"/>
                  <p hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <p>
                    <label>
                      Your full name<br />
                      <input type="text" name="name" />
                    </label>
                  </p>
                  <p>
                    <label>
                      Your email address<br />
                      <input type="email" name="email" />
                    </label>
                  </p>
                  <p>
                    <label>
                      What would you like to discuss on the podcast?<br />
                      <textarea name="message" />
                    </label>
                  </p>
                  <p>
                    <button type="submit" className="btn">Send</button>
                  </p>
                </form>

                </div>
              </div>

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
