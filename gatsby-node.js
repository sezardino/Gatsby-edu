const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

const query = `
query {
  allMarkdownRemark(filter: {fields: {slug: {regex: "/\/blog\//"}}}) {
    edges {
      node {
        fields {
          slug
        }
        id
      }
    }
  }
}
`;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    if (node.fileAbsolutePath.includes("/blog/")) {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
    if (node.fileAbsolutePath.includes("/pages/")) {
      const newSlug = slug.replace('/pages', '');
      createNodeField({
        node,
        name: `slug`,
        value: newSlug === "/home/" ? "/" : newSlug,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(query);

  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((item) => {
    const { node } = item;
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/PostTemplate.js"),
      context: { slug: node.fields.slug },
    });
  });
};
