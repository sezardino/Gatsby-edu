import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

const PostCard = ({ node }) => {
  console.log(node);
  const image = getImage(node.frontmatter.featureImage);
  return {
    template: (
      <Link
        to={node.fields.slug}
        key={node.id}
        style={{ display: "flex", alignItems: "center" }}
      >
        <GatsbyImage
          image={image}
          alt={node.frontmatter.title}
          style={{ marginRight: 15 }}
        />
        <div>
          <h4>{node.frontmatter.title}</h4>
          <p>{node.excerpt}</p>
        </div>
      </Link>
    ),
    id: node.id,
  };
};

const Blog = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const posts = data.allMarkdownRemark.edges;
  const postCards = posts.map(PostCard);
  return (
    <Layout title={fields.title}>
      <h1>{fields.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
      <ul>
        {postCards.map((item) => (
          <li key={item.id}>{item.template}</li>
        ))}
      </ul>
    </Layout>
  );
};

const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/pages/blog/" }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(filter: { fields: { slug: { regex: "/blog/post-/" } } }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 50)
          fields {
            slug
          }
          frontmatter {
            title
            featureImage {
              childImageSharp {
                gatsbyImageData(
                  width: 100
                  placeholder: DOMINANT_COLOR
                  layout: FIXED
                )
              }
            }
          }
        }
      }
    }
  }
`;

export { query };
export default Blog;
