import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Square from './Square'; //use {} for the imported class only if its not declared as a default export
import './square.css';
class Board extends React.Component {

    //renders 9 squares



    elements = [[1, 2, 3],[ 4, 5, 6],[ 7, 8, 9]]
    constructor(props) {
       // const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            XIsNext :true,
            history:[
                {
                    squares:Array(9).fill(null),
                    XIsNext :true,
                }
            ],

          
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
  getWinner(squares){

     
      const lines = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ];
      for (let i = 0; i < lines.length; i++) {
        console.log("lines "+lines[i])
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(lines[i])
          return squares[a];

        }
      }
      return null; 
        
    }
   
    handleClick(k) {
        console.log(k + " button pressed")
        const squares = this.state.squares.slice();
       
        squares[k] = (this.state.XIsNext ?'X':'O');
        const pastPlayer =!this.state.XIsNext 
        //console.log(this.state.XIsNext)

        const currentHistory=this.state.history.slice()
        console.log("PreviousHistory "+JSON.stringify(currentHistory))

       let forHistory ={
            squares:squares,
            XIsNext:!pastPlayer 
        }
        const History=currentHistory.push(forHistory)
        console.log("History "+History)
       console.log("UpdatedHistory "+JSON.stringify(currentHistory))
       //console.log(currentHistory)
        this.setState((state)=>{
            
            return{
            squares: squares,
            XIsNext: !this.state.XIsNext,
            history:currentHistory
            }
           
            
        });
       // setTimeout(function(){  console.log("after update ") }, 3000);
        console.log("after update squares "+JSON.stringify(this.state.squares))
        console.log("after update "+JSON.stringify(this.state.history))
       // setTimeout(function(){  console.log("after update ") }, 3000);
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
    console.log("squares inside render : "+this.state.squares)
   
  
     console.log(nextPlayer)
     let  outout = this.getWinner(this.state.squares);
     console.log("outout "+outout)
     let winner=(outout==="X")?"Player 1":"Player 2"
     let winnerClass=(outout!=null)?"winner-visible":"winner-invisible"
    
     
 return (

    <div>

    <div className={winnerClass}>
        <h1>Winner is {winner} !!</h1>
    </div>
    <div className="current-player">
    <h5>Next Player : <span>{nextPlayer}</span></h5>
  
        
    </div>
    <div className="square-board">
 {this.elements.map((i)=>{
   console.log("elemnt no : "+i)
   const rows= i.map((x)=>{ 
       let disbale= (this.state.squares[x]==null)?false:true 
       let squareColor=(this.state.squares[x]=='X')?"square-X":"square-Y"
    return <Square className={(this.state.squares[x]==null)?"square-default":squareColor} key={x} value={this.state.squares[x]} disabled={disbale} onClick ={()=>this.handleClick(x)}/>})
   console.log(rows)
   rows.push(<br/>)
   return rows
          
  } )}

</div>


<button class="reset-button" onClick={()=>this.reset()}>New Game</button>
    </div>
 ) ;  

    }
}

export default Board;
 