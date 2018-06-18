import React from "react";
import Link from "gatsby-link";

const PostListing = ({ post }) => (
  <article>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.textSnippet}</p>
  </article>
);

export default PostListing;
