import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer/";
import PageHero from "../images/about-digital-coalface.jpg";

const About = ({ data }) => (
  <div>
  <Header data={data} />
  <main>
  <img src={PageHero} alt="Podcast equipment" />
    <div className="wrap">

          <div className="row">

            <div className="column large-8">

            <h1>About</h1>

            <p>The Digital Coalface’s main aim is to help people working in digital improve themselves by discussing important topics within the industry and providing useful resources.</p>

            <p>Working in digital in 2018 is more challenging than ever, with this in mind I wanted to create something that would help colleagues in their day to day jobs even if its just a point discussed or a resource link shared.</p>

            <p>I also wanted to try to improve myself, push out of my comfort zone, speaking on a podcast was high on the list of things that would make me uncomfortable.</p>

            <p>I hope you can bear with me on the podcasts, I’m hoping at some point I will find my voice but please send any feedback you may have on how we could improve the format to <a href="mailto:uxeskimo@gmail.com">uxeskimo@gmail.com</a></p>

            <p>I'm a Manchester based interaction designer with over 17 years commercial experience and am currently helping coop digital improve their digital offerings.</p>

            </div>
      </div>
    </div>
  </main>
  <Footer data={data} />
  </div>
);

export default About;
