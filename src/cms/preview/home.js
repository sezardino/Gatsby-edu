import React from "react";
import { HomeTemplate } from "../../pages/index";

const Home = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  const props = {
    title: data.title,
    name: data.name,
    surname: data.surname,
    position: data.position,
    image: getAsset(data.image),
  };
  if (data) {
    return <HomeTemplate data={props} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default Home;
