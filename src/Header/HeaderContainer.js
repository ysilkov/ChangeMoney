import React from "react";
import Header from "./Header";
import axios from "axios";



export default class HeaderContaine extends React.Component{
    state ={
        curs:[]
    }
    componentDidMount(){
            axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
            .then(res =>{
                const curs = res.data;
                this.setState({curs});
            })
            }
          render() {
              return (
                  
                  <Header curs={this.state.curs} />
                  
              )
          }
    }