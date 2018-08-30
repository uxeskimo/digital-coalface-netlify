import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import DefaultHeader from "../components/Header";
import FavIcon from "../images/favicon-32x32.png";
import "./main.scss";

const PageWrapper = ({ children, data, location }) => (
  <div className="main-wrap">
    <Helmet title="The Digital Coalface"
            meta={[ { name: "description", content: "The digital coalface provides videos and podcasts for interacton designers, researchers, developers and product people to help them become better in their work." },
                    { name: "keywords", content: "Digital coalface, Lee Murray, podcast, videocast, interacton designer, UX, visual designer, researcher, content design, front-end developer, product owner." }
    ]}
    link={[
      { rel: 'shortcut icon', type: 'image/png', href: `${FavIcon}` }
      ]}
    />

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
