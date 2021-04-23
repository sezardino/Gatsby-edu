import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const changeP = (string, className) => {
  return string.replace('<p>', `<p class="${className}">`)
}

const About = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const html = changeP(data.markdownRemark.html, 'some-class');
  return (
    <Layout title={fields.title}>
      <h1>{fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
