import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PostListing from "../components/Posts/PostListing";
import Header from "../components/Header/home-header.js";
import Footer from "../components/Footer";

const IndexPage = ({ data }) => (
  <div className="main-wrap">
  <Header data={data}/>
  <main className="blue-bg home">

    <div className="wrap">
      <div className="main-content">

          <h2>Episodes</h2>

              {data.allContentfulBlogPost.edges.map(({ node }) => (
              <PostListing key={node.id} post={node} />))}
     </div>
    </div>
  </main>
  <Footer data={data}/>
  </div>
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
