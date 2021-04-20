import React from "react";

const style = {
  maxWidth: 1200,
  margin: "0 auto",
};

const Container = ({ children }) => {
  return <div style={style}>{children}</div>;
};

export default Container;
