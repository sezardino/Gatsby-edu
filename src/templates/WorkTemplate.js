import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const PostTemplate = (props) => {
  const slug = props.pageContext.slug;
  console.log(slug);
  return (
    <Layout>
      <h1>WORK Template</h1>
    </Layout>
  );
};
export default PostTemplate;
