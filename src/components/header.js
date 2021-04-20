import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Container from "./container";

const query = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "pages" } }
      sort: { fields: childMarkdownRemark___frontmatter___slug }
    ) {
      nodes {
        id
        childMarkdownRemark {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;

const NavLink = (item) => (
  <li key={item.id} style={{ margin: 0 }}>
    <Link
      to={item.childMarkdownRemark.frontmatter.slug}
      style={{ color: "white", padding: 0, textDecoration: "none" }}
    >
      {item.childMarkdownRemark.frontmatter.title}
    </Link>
  </li>
);

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(query);
  const links = data.allFile.nodes.map(NavLink);
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
