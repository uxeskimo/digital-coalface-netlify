import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer/";
import Img from 'gatsby-image';

const About = ({ data }) => (
  <div>
  <Header data={data} />
  <main>
  <Img sizes={data.background.sizes} />
    <div className="wrap">

          <div className="row">

            <div className="column large-8">

            <h1>About</h1>

            <p>Hello, my name is <a href="https://www.linkedin.com/in/lee-murray-05706562/">Lee Murray</a>, welcome to the digital coalface.</p>

            <p>I created the digital coalface with the aim to help people working in digital improve themselves by discussing important topics within the industry and providing useful resources.</p>

            <p>Working in digital in 2018 is more challenging than ever, with this in mind I wanted to create something that would help colleagues in their day to day jobs even if it's just a point discussed or a resource link shared.</p>

            <p>I also wanted to try to improve myself, push out of my comfort zone, speaking on a podcast was high on the list of things that would make me uncomfortable.</p>

            <p>I hope you can bear with me on the podcasts, I’m hoping at some point I will find my voice, my vocabulary and get better but please send any feedback you may have on how we could improve the format to <a href="mailto:thedigitalcoalface@gmail.com">thedigitalcoalface@gmail.com</a>.</p>

            <p>I'm a Manchester based interaction designer with over 17 years commercial experience and am currently helping co-op digital improve their digital offerings.</p>

            <p>My personal twitter is <a href="https://twitter.com/uxeskimo">@uxeskimo</a> and my own website is <a href="https://uxeskimo.co.uk">www.uxeskimo.co.uk</a>.</p>

            </div>
      </div>
    </div>
  </main>
  <Footer data={data} />
  </div>
);

export default About;

export const query = graphql`
  query LayoutQueryImg {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: {regex: "/about-digital-coalface.jpg/"}) {
        sizes(quality: 100) {
          ...GatsbyImageSharpSizes
        }
    }
  }
`;
