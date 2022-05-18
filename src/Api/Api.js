import React from "react";
import Loading from "../Loading/Loading";
import ApiContainer from "./ApiContainer";

class Api extends React.Component{
    constructor(props){
        super(props)
    this.state = {  
        "EUR": 0,
        "UAH": 0,
        "USD": 0,
        isLoading: false
      }
    }  
        componentDidMount(){
            this.setState ({ isLoading: true });
        fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
          .then(res => {
            return res.json();
          })
          .then(data => {
            this.setState({
              "EUR": data[1].sale,
              "UAH": 1,
              "USD": data[0].sale,
              isLoading: false
            })
        })
    }
      render() {
        return (<>
          {(this.state.isLoading ? <Loading /> : <ApiContainer state={this.state}/>)}
       </> )
      }
    }

export default Api;