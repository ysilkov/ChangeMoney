import React from "react";
import style from "./Profile.module.css";

const Profile = (props) => {
  const input = document.querySelector("#input");
  const result = document.querySelector("#result");
  const select1 = document.querySelector("#select1");
  const select2 = document.querySelector("#select2");

  const onSelect = () => {
    if (select1.value === select2.value) {
      result.value = input.value;
    }
    if (select1.value === "UAH" && select2.value === "USD") {
      result.value = (parseFloat(input.value) / props.state.USD).toFixed(2);
    }
    if (select1.value === "UAH" && select2.value === "EUR") {
      result.value = (parseFloat(input.value) / props.state.EUR).toFixed(2);
    }
    if (select1.value === "USD" && select2.value === "UAH") {
      result.value = (parseFloat(input.value) * props.state.USD).toFixed(0);
    }
    if (select1.value === "USD" && select2.value === "EUR") {
      result.value = (
        (parseFloat(input.value) * props.state.USD) /
        props.state.EUR
      ).toFixed(2);
    }
    if (select1.value === "USD" && select2.value === "UAH") {
      result.value = (parseFloat(input.value) * props.state.USD).toFixed(0);
    }
    if (select1.value === "USD" && select2.value === "EUR") {
      result.value = (
        (parseFloat(input.value) * props.state.USD) /
        props.state.EUR
      ).toFixed(2);
    }
    if (select1.value === "EUR" && select2.value === "UAH") {
      result.value = (parseFloat(input.value) * props.state.EUR).toFixed(0);
    }
    if (select1.value === "EUR" && select2.value === "USD") {
      result.value = (
        (parseFloat(input.value) * props.state.EUR) /
        props.state.USD
      ).toFixed(2);
    }
  };
  const onSelect2 = () => {
    if (select2.value === select1.value) {
      input.value = result.value;
    }
    if (select2.value === "UAH" && select1.value === "USD") {
      input.value = (parseFloat(result.value) / props.state.USD).toFixed(2);
    }
    if (select2.value === "UAH" && select1.value === "EUR") {
      input.value = (parseFloat(result.value) / props.state.EUR).toFixed(2);
    }
    if (select2.value === "USD" && select1.value === "UAH") {
      input.value = (parseFloat(result.value) * props.state.USD).toFixed(0);
    }
    if (select2.value === "USD" && select1.value === "EUR") {
      input.value = (
        (parseFloat(result.value) * props.state.USD) /
        props.state.EUR
      ).toFixed(2);
    }
    if (select2.value === "USD" && select1.value === "UAH") {
      input.value = (parseFloat(result.value) * props.state.USD).toFixed(0);
    }
    if (select2.value === "USD" && select1.value === "EUR") {
      input.value = (
        (parseFloat(result.value) * props.state.USD) /
        props.state.EUR
      ).toFixed(2);
    }
    if (select2.value === "EUR" && select1.value === "UAH") {
      input.value = (parseFloat(result.value) * props.state.EUR).toFixed(0);
    }
    if (select2.value === "EUR" && select1.value === "USD") {
      input.value = (
        (parseFloat(result.value) * props.state.EUR) /
        props.state.USD
      ).toFixed(2);
    }
  };
  const clickInput = () => {
    onSelect();
  };
  const clickResult = () => {
    onSelect2();
  };
  return (
    <div className={style.main}>
      <div className={style.formFirst}>
        <div className={style.input}>
          <input
            id="input"
            autoFocus
            type="number"
            onInput={clickInput}
            placeholder="Введіть число"
          />
        </div>
        <div className={style.select}>
          <select id="select1" onClick={onSelect2}>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
      <div className={style.formSecond}>
        <div className={style.input}>
          <input
            id="result"
            autoFocus
            type="number"
            onInput={clickResult}
            placeholder="Введіть число"
          />
        </div>
        <div className={style.select}>
          <select id="select2" onClick={onSelect}>
            <option value="UAH">UAH</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Profile;
