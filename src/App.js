import "./App.css";
import React from "react";

import Profile from "./components/Profile";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";



const App = () => {
  const data = useSelector((state)=>state.rate)
  
  return (
    <div>
    {data.loading === true && <Loading />}
    {data.error &&  <h2>An error occured: {data.error}</h2>}
      <Profile />
      </div>
  );
};
export default App;
