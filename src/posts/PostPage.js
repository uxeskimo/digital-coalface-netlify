import React, { Component } from "react";

import DefaultHeader from "../components/Header";
import Footer from "../components/Footer/";

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
    <div className="page-wrap">
      <DefaultHeader data={data} />
      <main>
      <div className="video">
         <div className="video-wrap">
             <iframe src="https://player.vimeo.com/video/284707647" width="640" height="180" frameborder="0" allowfullscreen></iframe>
            </div>
      </div>
        <div className="wrap">
        <div className="row">
          <div className="column">
          <span>{data.contentfulBlogPost.date}</span>
           <h1>{data.contentfulBlogPost.title}</h1>

           <div className="row">
            <div className="column large-7">
            <div dangerouslySetInnerHTML={{
                    __html: data.contentfulBlogPost.body.childMarkdownRemark.html
              }} />
              </div>
              </div>
            </div>
          </div>
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
