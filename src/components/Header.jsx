import React from "react";

const Header = (props) => {
  return (
    <div className="current_money">
      <div>Курс валют:</div>
      <div>USD: {Number(props.state.USD).toFixed(2)}</div>
      <div>EUR: {Number(props.state.EUR).toFixed(2)}</div>
    </div>
  );
};
export default Header;
