import React from "react";
import { ContactTemplate } from "../../pages/contact";

const About = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  const props = {
    title: data.title,
    contactData: data.contactData,
  };
  if (data) {
    return <ContactTemplate data={props} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default About;
