import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const About = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  return (
    <Layout title={fields.title}>
      <h1>{fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  );
};

const query = graphql`
query {
  markdownRemark(fileAbsolutePath: {regex: "/about/"}) {
    frontmatter {
      title
    }
    html
  }
}
`;

export { query };
export default About;
