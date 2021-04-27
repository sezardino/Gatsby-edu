import React from "react";
import { SkillsTemplate } from "../../pages/skills";

const Skills = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  const props = {
    title: data.title,
    skills: data.skills,
  };
  if (data) {
    return <SkillsTemplate data={props} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default Skills;
