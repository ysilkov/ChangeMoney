import React from "react";
import axios from "axios";
import Profile from "./Profile"

export default class ProfileContainer extends React.Component{
    valute ={
        USD: "",
        EUR: ""
    }
    componentDidMount(){
            axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            .then(res =>{
                this.valute.USD = res.data[0].sale;
                this.valute.EUR = res.data[1].sale;
            })
            }
          render() {
              return (
                  <Profile />
              )
          }
    }