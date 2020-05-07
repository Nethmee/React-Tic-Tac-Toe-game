import React from 'react';
//import logo from './logo.svg';
//import './App.css';


 /* function Square(props){
    return  (
      
      <button  onClick={()=>{this.props.onClick()}} >
                <p>{this.props.value}</p>

      </button>
      );
  } */

  function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
     <h6>  {props.value}</h6>
      </button>
    );
  }

export default Square;
