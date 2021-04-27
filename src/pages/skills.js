import { graphql } from "gatsby";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";

const Skill = (item) => (
  <li key={item.name}>
    <span>{item.name}</span> - <span>{item.level}</span>
  </li>
);

const Skills = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const props = {
    skills: fields.skills,
    title: fields.title,
  };
  return (
    <Layout title={fields.title}>
      <SkillsTemplate data={props} />
    </Layout>
  );
};

const SkillsTemplate = ({ data }) => {
  const { title, skills } = data;
  return (
    <Container>
      <h1>{title}</h1>
      <ul>{skills.map(Skill)}</ul>
    </Container>
  );
};

const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/skills/" }) {
      frontmatter {
        title
        skills {
          name
          level
        }
      }
      html
    }
  }
`;

export { query, SkillsTemplate };
export default Skills;
