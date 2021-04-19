import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const Blog = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  return (
    <Layout title={fields.title}>
      <h1>{fields.title}</h1>
    </Layout>
  );
};

const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "/" } }) {
      frontmatter {
        title
      }
    }
  }
`;

export { query };
export default Blog;
