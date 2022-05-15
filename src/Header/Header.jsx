import React from "react";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={style.main}>
      <div>Курс валют:</div>
      <div>USD: {Number(props.state.USD).toFixed(2)}</div>
      <div>EUR: {Number(props.state.EUR).toFixed(2)}</div>
    </div>
  );
};
export default Header;
