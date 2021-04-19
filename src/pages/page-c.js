import { graphql } from "gatsby";
import React from "react";

const PageC = ({data}) => {
  const fields = data.markdownRemark.frontmatter;
  return <>
    <h1>{fields.title}</h1>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
  </>;
};

const query = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "/page-c" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export { query };
export default PageC;
