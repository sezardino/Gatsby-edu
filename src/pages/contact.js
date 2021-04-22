import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const Contact = ({ data }) => {
  const fields = data.markdownRemark.frontmatter;
  const contactData = fields.contactData;
  console.log(contactData);
  return (
    <Layout title={fields.title}>
      <h1>{fields.title}</h1>
      <div>
        <p>mail: {contactData.mail}</p>
        <p>tel: {contactData.tel}</p>
        <ul style={{display: 'flex', flexDirection: 'column'}}>
          {contactData.social.map((item) => {
            return <Link to={item.link} key={item.name}>{item.label}: {item.link}</Link>
          })}
        </ul>
      </div>
    </Layout>
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

export { query };
export default Contact;
