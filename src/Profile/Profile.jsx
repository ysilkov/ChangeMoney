import React from 'react';
import style from "./Profile.module.css"

const Profile=()=>{
  return (
    <div className={style.main}>
      <div className={style.formFirst}>
      <div className={style.input}>
<input />
</div>
<div className={style.select}>
<select>
  <option value1="Ukrain hryvnya">UAH</option>
  <option value2="USA dollar">USD</option>
  <option value3="Euro">EUR</option>
</select>
</div>
    </div>
    <div className={style.formSecond}>
      <div className={style.input}>
<input />
</div>
<div className={style.select}>
<select>
<option value1="Ukrain hryvnya">UAH</option>
  <option value2="USA dollar">USD</option>
  <option value3="Euro">EUR</option>
</select>
</div>
    </div>
    </div>
  )
}

export default Profile;
