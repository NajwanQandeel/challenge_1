const ticTacGame= new TicTacGame();
ticTacGame.start();

function TicTacGame(){
    const board = new Board();
    const human = new Human(board);
    const computer = new Computer(board);
    let turn = 0;
    this.start =function(){
        const changing = {childList: true}; // to observe any change happen in div child 
        const observer = new MutationObserver (() => changeTurn() );
       board.positions.forEach((el) => observer.observe(el,changing));
       changeTurn();
    }
}
 function changeTurn (){
//   console.log("any change ")
if(turn % 2 === 0 ){
    human.changeTurn();
}
else {
    computer.changeTurn();
}
turn++;
 }




function Board(){
this.positions = Array.from(document.querySelectorAll('.col'))    
console.log(this.positions)
}

function Human(board){
    this.changeTurn = function(){
        // console.log('Its the turn of HUMON');
        board.positions.forEach(el => el.addEventListener('click', handleTheTurn))
    }

}

function handleTheTurn(event){
// console.log('turn');
}





 function Computer(board){
    this.changeTurn = function(){
        // console.log('Its the turn of COMPUTER');
    }
 }













// var play_board = ['','','','','','','','',''];

// var board_container = document.querySelector('.play_area');
// var render_board = () => {
//     board_container.innerHTML = "";
//     play_board.forEach((el, i) => {
//         board_container.innerHTML = `<div id="b_${i}"  onclick="addPlayerMove(${i})">${play_board[i]}</div>`;
//     }
// }

// render_board();



// document.querySelector('#b1').addEventListener('click', event => {
//     "#b1"="X";
//   })

