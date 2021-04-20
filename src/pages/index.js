import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Img from 'gatsby-image';

const HomePage = ({ data }) => {
  console.log(data);
  const fields = data.markdownRemark.frontmatter;
  return (
    <Layout title={fields.title}>
      <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
    </Layout>
  );
};

const query = graphql`
query {
  markdownRemark(fileAbsolutePath: {regex: "/home/"}) {
    frontmatter {
      title
      image {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    html
  }
}
`;

export { query };
export default HomePage;
