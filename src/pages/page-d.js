import { graphql } from "gatsby";
import React from "react";

const PageD = ({data}) => {
  const fields = data.markdownRemark.frontmatter;
  return <>
    <h1>{fields.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
  </>;
};

const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { slug: { eq: "/page-d" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export { query };
export default PageD;
