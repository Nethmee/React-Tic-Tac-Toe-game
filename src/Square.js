import React from 'react';
//import logo from './logo.svg';
import './square.css';


 /* function Square(props){
    return  (
      
      <button  onClick={()=>{this.props.onClick()}} >
                <p>{this.props.value}</p>

      </button>
      );
  } */

  function Square(props) {
    console.log("disbaled in square "+props.disabled)
    return (
      <button className={props.className} onClick={props.onClick} disabled={props.disabled}>

     <p>  {props.value}</p>
      </button>
    );
  }

export default Square;
