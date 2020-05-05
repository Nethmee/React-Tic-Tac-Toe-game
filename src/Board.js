import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Square from './Square'; //use {} for the imported class only if its not declared as a default export

class Board extends React.Component {

    //renders 9 squares



    elements = [[1, 2, 3],[ 4, 5, 6],[ 7, 8, 9]]
    constructor(props) {
       // const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            XIsNext :true,
          
        };
    }
  
    reset(){
        alert("Are you sure  you want to reset?")

        const squares = Array(9).fill(null)
        this.setState({
            squares:squares,
            XIsNext:true,
        })
        
    }
   
    handleClick(k) {
        console.log(k + " button pressed")
        const squares = this.state.squares.slice();
        squares[k] = (this.state.XIsNext ?'X':'O');
      
        this.setState({ 
            squares: squares,
            XIsNext: !this.state.XIsNext,
        
        });
    }


   /*  renderSquare() {
        var k = 1;
        let board = [];
        for (let j = 0; j < 3; j++) {

            let row = [];
            for (let i = 0; i < 3; i++) {

                row.push(<Square value={this.state.squares[k]} onClick={() => { this.handleCLick(k) }} />)
                k++;
                console.log(k);
            }
            board.push(<div>{row}</div>)
        }

        return board;

    }  */
    render() {
     const nextPlayer = (this.state.XIsNext)? "player 1":"player 2"
     console.log(nextPlayer)
 return (

    <div>
    <div>
    <h2>Next Player:<span>{nextPlayer}</span></h2>

        
    </div>
    <div>
 {this.elements.map((i)=>{
   
   const rows= i.map((x)=>{return <Square key={x} value={this.state.squares[x]} onClick ={()=>this.handleClick(x)}/>})
   console.log(rows)
   rows.push(<br/>)
   return rows
          
  } )}

</div>


<button onClick={()=>this.reset()}>Reset</button>
    </div>
 ) ;  

    }
}

export default Board;
