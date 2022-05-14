import './App.css';
import React from 'react';
import Loading from './Loading/Loading';
import ApiContainer from './ApiContainer';

export default class API extends React.Component{
  state ={
      USD: "",
      EUR: "", 
      isLoading: false,
  }

  componentDidMount(){
      this.setState({isLoading: true})
          fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
          .then(res =>{
              return res.json()
          }).then(data=>{
              this.setState({
                "USD": data[0].sale,
                "EUR": data[1].sale,
                isLoading: false,
              })
             
              })
          }
        
        render() {
            return <>
                {this.state.isLoading ? <Loading />: <ApiContainer state={this.state}/> } 
               
             </>
    
            }
          }