import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const WorkCard = (data) => {
  const fields = data.node.childMarkdownRemark.frontmatter;
  const image = getImage(fields.image);
  return (
    <Link to={data.node.childMarkdownRemark.fields.slug} key={data.node.childMarkdownRemark.id}>
      <h3>{fields.title}</h3>
      <GatsbyImage image={image} alt={fields.title} />
    </Link>
  );
};

const Works = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const works = data.allFile.edges;
  const workCards = works.map(WorkCard);
  return (
    <Layout title={fields.title}>
      <h1>{fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
      <ul>
        {workCards.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </Layout>
  );
};

const query = graphql`
  query MyQuery {
    markdownRemark(fileAbsolutePath: { regex: "/works.md/" }) {
      html
      frontmatter {
        title
      }
    }
    allFile(
      filter: {
        sourceInstanceName: { eq: "content" }
        absolutePath: { regex: "//works//" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            id
            fields {
              slug
            }
            frontmatter {
              title
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 250
                    layout: FIXED
                    placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { query };
export default Works;
