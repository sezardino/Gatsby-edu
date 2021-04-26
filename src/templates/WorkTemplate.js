import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const PostTemplate = ({ data }) => {
  const fields = data.markdownRemark
  console.log(fields);
  const preview = getImage(fields.frontmatter.projectImage.preview);
  const desktop = getImage(fields.frontmatter.projectImage.desktop);
  const mobile = getImage(fields.frontmatter.projectImage.mobile);
  const {name, desc, repo, view, techn} = fields.frontmatter.description;
  return (
    <Layout title={fields.frontmatter.title} >
      <h1>{fields.frontmatter.title}</h1>
      <GatsbyImage image={preview} alt={fields.frontmatter.title}/>
      <GatsbyImage image={desktop} alt={fields.frontmatter.title}/>
      <GatsbyImage image={mobile} alt={fields.frontmatter.title}/>
      <p>Description:</p>
      <p>name: {name}</p>
      <p>name: {desc}</p>
      <p>name: {repo}</p>
      <p>name: {view}</p>
      <p>Technologies</p>
      <ul>
        {techn.map((item) => <p key={item}>{item}</p>)}
      </ul>
    </Layout>
  );
};

const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description {
          desc
          name
          repo
          view
          techn
        }
        projectImage {
          desktop {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 450, layout: FIXED)
            }
          }
          mobile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 450, layout: FIXED)
            }
          }
          preview {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 450, layout: FIXED)
            }
          }
        }
      }
    }
  }
`;

export { query };
export default PostTemplate;
