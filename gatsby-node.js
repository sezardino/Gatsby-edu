const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

const SLUGS = {
  WORK: "work-",
  POST: "post-",
};

const TEMPLATES = {
  WORK: path.resolve("./src/templates/WorkTemplate.js"),
  POST: path.resolve("./src/templates/PostTemplate.js"),
  DEFAULT: path.resolve("./src/templates/DefaultTemplate.js"),
};

const query = `
{
  allMarkdownRemark(filter: {fields: {slug: {regex: "/works\/work-|blog\/post-/"}}}) {
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
      const newSlug = slug.replace("/pages", "");
      createNodeField({
        node,
        name: `slug`,
        value: newSlug === "/home/" ? "/" : newSlug,
      });
    }
    if (node.fileAbsolutePath.includes("/works/")) {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(query);

  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((item) => {
    const { node: {fields: {slug}} } = item;

    const template = slug.includes(SLUGS.WORK)
      ? TEMPLATES.WORK
      : slug.includes(SLUGS.POST)
      ? TEMPLATES.POST
      : TEMPLATES.DEFAULT;

    createPage({
      path: slug,
      component: template,
      context: { slug: slug },
    });
  });
};
