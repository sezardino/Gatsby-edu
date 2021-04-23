import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const PostTemplate = ({data}) => {
  const fields = data.markdownRemark
  const image = getImage(fields.frontmatter.image);
  return (
    <Layout title={fields.frontmatter.title} >
      <h1>{fields.frontmatter.title}</h1>
      <GatsbyImage image={image} alt={fields.frontmatter.title}/>
      <p>Description:</p>
      <div dangerouslySetInnerHTML={{__html: fields.html}}></div>
    </Layout>
  );
};

const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 450, layout: FIXED)
          }
        }
      }
    }
  }
`;

export { query };
export default PostTemplate;
