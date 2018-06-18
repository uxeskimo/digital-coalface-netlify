import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PostListing from "../components/Posts/PostListing";
import Footer from "../components/Footer";

const IndexPage = ({ data }) => (
  <main>
    <div className="wrap">
      <div className="row">
        <div className="column">
          <h2>Season 1</h2>

          <div className="row">

          <div className="column medium-6">

              {data.allContentfulBlogPost.edges.map(({ node }) => (
              <PostListing key={node.id} post={node} />
              ))}

          </div>

          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <Footer data={data} location={location} />
        </div>
      </div>
    </div>
  </main>
);

export default IndexPage;

export const query = graphql`
  query SiteMeta {
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
