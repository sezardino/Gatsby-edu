import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const HomePage = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const image = getImage(fields.image);
  return (
    <Layout title={fields.title}>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
      <GatsbyImage image={image} alt={"some alt"}/>
    </Layout>
  );
};

const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: FIXED)
          }
        }
      }
      html
    }
  }
`;

export { query };
export default HomePage;
