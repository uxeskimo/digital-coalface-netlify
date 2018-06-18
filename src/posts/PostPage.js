import React, { Component } from "react";

import Header from "../components/Header";

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div className="wrap">
        <div className="row">
          <div className="column">
            <span>{data.contentfulBlogPost.date}</span>
            <h1>{data.contentfulBlogPost.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.contentfulBlogPost.body.childMarkdownRemark.html
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
      id
    }
  }
`;
