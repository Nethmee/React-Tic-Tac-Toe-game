import React from 'react';
//import logo from './logo.svg';
//import './App.css';

class Square extends React.Component {
constructor(props){

super(props);
this.state={
 
}

    }
    render() {
      return (
      
      <button 
     
       onClick={()=>{this.props.onClick()}} >
                <p>{this.props.value}</p>

      </button>);
    }
  }

export default Square;
