
var play_board = ['','','','','','','','',''];

var board_container = document.querySelector('.play_area');
var render_board = () => {
    board_container.innerHTML = "";
    play_board.forEach((el, i) => {
        board_container.innerHTML = `<div id="b_${i}"  onclick="addPlayerMove(${i})">${play_board[i]}</div>`;
    }
}

render_board();





// document.querySelector('#b1').addEventListener('click', event => {
//     "#b1"="X";
//   })

