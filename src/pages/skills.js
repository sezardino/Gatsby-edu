import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const Skill = (item) => <li key={item.name}>
  <span>{item.name}</span> - <span>{item.level}</span>
</li>

const Skills = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const skills = fields.skills.map(Skill);
  return (
    <Layout title={fields.title}>
      <h1>{fields.title}</h1>
      <ul>
        {skills}
      </ul>
    </Layout>
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

export { query };
export default Skills;
