import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Container from "./container";

const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { inNav: { eq: true } } }
      sort: { fields: frontmatter___slug }
    ) {
      nodes {
        frontmatter {
          title
          slug
        }
        id
      }
    }
  }
`;

const NavLink = (item) => (
  <li key={item.id} style={{ margin: 0 }}>
    <Link
      to={item.frontmatter.slug}
      style={{ color: "white", padding: 0, textDecoration: "none" }}
    >
      {item.frontmatter.title}
    </Link>
  </li>
);

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(query);
  const links = data.allMarkdownRemark.nodes.map(NavLink);
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
