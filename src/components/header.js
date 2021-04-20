import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Container from "./container";

const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//pages//" } }
      sort: { fields: frontmatter___navOrder }
    ) {
      edges {
        node {
          frontmatter {
            title
            navOrder
          }
          fields {
            slug
          }
          id
        }
      }
    }
  }
`;

const NavLink = (item) => (
  <li key={item.node.id} style={{ margin: 0 }}>
    <Link
      to={item.node.fields.slug}
      style={{ color: "white", padding: 0, textDecoration: "none" }}
    >
      {item.node.frontmatter.title}
    </Link>
  </li>
);

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(query);
  const links = data.allMarkdownRemark.edges.map(NavLink);
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        padding: "25px 0",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <p style={{ fontSize: 25, color: "white", margin: 0 }}>Some logo</p>
          </Link>
          <nav style={{ maxWidth: 400, width: "100%" }}>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                listStyleType: "none",
                margin: 0,
              }}
            >
              {links}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
