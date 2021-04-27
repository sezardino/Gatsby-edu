import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";

const HomePage = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const props = {
    image: fields.image,
    name: fields.name,
    surname: fields.surname,
    position: fields.position
  }
  return (
    <Layout title={fields.title}>
      <HomeTemplate data={props} />
    </Layout>
  );
};

const HomeTemplate = ({ data }) => {
  const { image, name, surname, position } = data;
  const img = getImage(image);
  return (
    <Container>
      <h1>
        <span>{name}</span> <span>{surname}</span>
      </h1>
      <p>{position}</p>
      <GatsbyImage image={img} alt={"some alt"} />
    </Container>
  );
};

const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
      html
      frontmatter {
        title
        name
        surname
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

export { query, HomeTemplate };
export default HomePage;
