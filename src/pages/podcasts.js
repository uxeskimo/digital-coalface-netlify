import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer/simple-footer.js";

const Podcasts = ({ data }) => (
  <div>
  <Header data={data} />
  <main>
    <div className="wrap">

          <div className="row">

            <div className="column medium-6">

            <h1>Podcasts</h1>




            </div>
      </div>
    </div>
  </main>
  <Footer data={data} />
  </div>
);

export default Podcasts;
