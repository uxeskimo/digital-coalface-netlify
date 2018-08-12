import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PostListing from "../components/Posts/PostListing";
import Header from "../components/Header/index";
import Footer from "../components/Footer/simple-footer.js";
import episodeThumb from "../images/episode-1.jpg";

const Episodes = ({ data }) => (
  <div>
  <Header data={data} />
  <main>
    <div className="wrap">

          <div className="row">

            <div className="column episodes">

            <h1>Episodes</h1>

             <div className="row">

               <div className="column medium-3">
                  <Link to="/1-design-ethics-with-phil-hesketh">
                     <img src={episodeThumb} alt="Episode 1" />
                  </Link>
              </div>

              <div className="column medium-9">

                  {data.allContentfulBlogPost.edges.map(({ node }) => (
                  <PostListing key={node.id} post={node} />))}

              </div>

              </div>

            </div>
      </div>
    </div>
  </main>
  <Footer data={data} />
  </div>
);

export default Episodes;

export const query = graphql`
  query SiteMetaTwo {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          textSnippet
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          createdAt(formatString: "MMMM DD, YYYY")
          slug
          id
          textSnippet
        }
      }
    }
  }
`;

