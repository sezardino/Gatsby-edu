import { graphql, Link } from "gatsby";
import React from "react";
import Container from "../components/container";
import Layout from "../components/layout";

const Contact = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const props = {
    contactData: fields.contactData,
    title: fields.title,
  };
  return (
    <Layout title={fields.title}>
      <ContactTemplate data={props} />
    </Layout>
  );
};

const ContactTemplate = ({ data }) => {
  const { contactData, title } = data;
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <p>mail: {contactData.mail}</p>
        <p>tel: {contactData.tel}</p>
        <ul style={{ display: "flex", flexDirection: "column" }}>
          {contactData.social.map((item) => {
            return (
              <Link to={item.link} key={item.name}>
                {item.label}: {item.link}
              </Link>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/contact/" }) {
      frontmatter {
        title
        contactData {
          mail
          tel
          social {
            label
            link
            name
          }
        }
      }
    }
  }
`;

export { query, ContactTemplate };
export default Contact;
