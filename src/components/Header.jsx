import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useSelector((state) => state.rate);
  return (
    <div className="current_money">
      <div>Курс валют:</div>
      <div>USD: {Number(data.USD).toFixed(2)}</div>
      <div>EUR: {Number(data.EUR).toFixed(2)}</div>
    </div>
  );
};
export default Header;
