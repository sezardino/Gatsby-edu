import { graphql } from "gatsby";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";

const About = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const props = {
    title: fields.title,
    frstText: fields.frstText,
    scndText: fields.scndText,
  };
  return (
    <Layout title={fields.title}>
      <AboutTemplate data={props} />
    </Layout>
  );
};

const AboutTemplate = ({ data }) => {
  const { title, frstText, scndText } = data;
  return (
    <Container>
      <h1>{title}</h1>
      <p>{frstText}</p>
      <p>{scndText}</p>
    </Container>
  );
};

const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
      frontmatter {
        title
        frstText
        scndText
      }
    }
  }
`;

export { query, AboutTemplate };
export default About;
