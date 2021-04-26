import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const HomePage = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const image = getImage(fields.image);
  return (
    <Layout title={fields.title}>
      <h1><span>{fields.name}</span> <span>{fields.surname}</span></h1>
      <p>{fields.position}</p>
      <GatsbyImage image={image} alt={"some alt"} />
    </Layout>
  );
};

const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
      html
      frontmatter {
        title
        name
        surname,
        position
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: FIXED)
          }
        }
      }
    }
  }
`;

export { query };
export default HomePage;
