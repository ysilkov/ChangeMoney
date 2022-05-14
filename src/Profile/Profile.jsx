import React from 'react';
import style from "./Profile.module.css"

const Profile=(props)=>{
  const input = document.querySelector("#input");
  const result = document.querySelector("#result");
  const select1 = document.querySelector("#select1");
  const select2 = document.querySelector("#select2");
  const onSelect =() => {
  if(select1.value==="USD"){return result.value= (parseFloat(input.value)/props.state.USD).toFixed(2)}
  if(select1.value==="EUR"){return result.value= (parseFloat(input.value)/props.state.EUR).toFixed(2)}
  if(select1.value==="UAH"){return result.value = input.value}
  } 
  const onSelect2 =() => {
    if(select2.value==="USD"){return result.value= (parseFloat(input.value)/props.state.USD).toFixed(2)}
    if(select2.value==="EUR"){return result.value= (parseFloat(input.value)/props.state.EUR).toFixed(2)}
    if(select2.value==="UAH"){return result.value = input.value}
    } 
  const convertAmount =()=>{
    if(select1===select2){
      return result.value=input.value;
    }
   /*  if(select1.value !== "UAH"){
      input.value =(parseFloat(input.value*props.state[select2.value]).toFixed(2));
    } else if (select2.value !== "UAH"){
      input.value =(parseFloat(input.value*props.state[select1.value]).toFixed(2));
    } */
  }
  return (
    <div className={style.main}>
      <div className={style.formFirst}>
      <div className={style.input}>
<input id="input" autoFocus type="number" onInput={onSelect}/>
</div>
<div className={style.select}>
<select id="select1" onChange={onSelect} >
  <option value="UAH">UAH</option>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
</select>
</div>
    </div>
    <div className={style.formSecond}>
      <div className={style.input}>
<input  id="result" autoFocus type="number" onInput={onSelect}/>
</div>
<div className={style.select}>
<select id="select2"  onChange={onSelect} >
  <option value="UAH">UAH</option>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
</select>
</div>
    </div>
    </div>
  )
}

export default Profile;
