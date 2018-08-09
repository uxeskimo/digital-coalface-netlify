import React, { Component } from "react";

import DefaultHeader from "../components/Header";
import Footer from "../components/Footer/simple-footer.js";

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
    <div>
      <DefaultHeader data={data} />
      <main>
        <div className="wrap">
          <span>{data.contentfulBlogPost.date}</span>
          <h1>{data.contentfulBlogPost.title}</h1>
          <div dangerouslySetInnerHTML={{
                  __html: data.contentfulBlogPost.body.childMarkdownRemark.html
            }} />
            </div>
      </main>
       <Footer data={data} />
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
