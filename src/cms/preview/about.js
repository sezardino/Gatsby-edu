import React from "react";
import { AboutTemplate } from "../../pages/about";

const About = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  const props = {
    title: data.title,
    frstText: data.frstText,
    scndText: data.scndText,
  };
  if (data) {
    return <AboutTemplate data={props} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default About;
