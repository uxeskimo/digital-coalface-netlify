import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import DefaultHeader from "../components/Header";
import "./main.scss";

const PageWrapper = ({ children, data, location }) => (
  <div className="main-wrap">
    <Helmet title="The Digital Coalface"
            meta={[ { name: "description", content: "Sample" },
                    { name: "keywords", content: "sample, something" }
    ]}/>
       
    {children()}
  
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.func
};

export default PageWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`;