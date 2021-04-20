import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const PostTemplate = (props) => {
  const {data: {markdownRemark}} = props;
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}></div>
    </Layout>
  );
};

const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export { query };
export default PostTemplate;
