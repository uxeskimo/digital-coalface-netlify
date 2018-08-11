import React from "react";
import Link from "gatsby-link";

const PostListing = ({ post }) => (
  <article>
    <h2>
      <Link to={post.slug}>{post.title}</Link>
    </h2>
    <p>{post.textSnippet}</p>
  </article>
);

export default PostListing;
