import React from "react";
import Header from "./Header";
import Profile from "./Profile";

const ApiContainer = (props) => {
  return (
    <>
      <Header state={props.state} />
      <Profile state={props.state} />
    </>
  );
};
export default ApiContainer;
