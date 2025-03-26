// Get a table to play on [array]
const table = Array.from(document.querySelectorAll('.box'))
    let currenP = 'o';
    let movesPlayed = [];

    // Winning combinations
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Add Eventlistener to each box
    table.forEach(box => {
        box.addEventListener('click', myfunction, { once: true });
    });

    // GAME START
    function myfunction(e) {
        // Need index of clicked box.
        const boxArr = Array.from(document.getElementsByClassName('box'));
        const index = boxArr.indexOf(e.target);
// click for add player 'o' svg-image.
        if (currenP === 'o') {   
            table[index].classList.add('boxHuman');
            movesPlayed.push(index);
       }else {
 //click add player 'x' svg-image.      
            table[index].classList.add('boxComputer');
            movesPlayed.push(index);
            console.log(index , "table= " + table.length );
        }
        if (checkWinner()) {
            setTimeout(() => {
                alert(currenP + "_Player wins! Restart?");
                restart();
            },100);
            return;
        }
//Switch Current Player.
        currenP = currenP == 'o' ? 'x' : 'o';

        if (movesPlayed.length === 9) {
            setTimeout(() => {
                alert('Draw! Restart?');
                restart();
            }, 100); // Timeout so boxhuman classList is added before alert.
        }
    }
function checkWinner() {   //'map' of box index,and they're classList.value....
    for (let combo of winCombos) {
        const boxes = combo.map(index => table[index]);
        const classes = boxes.map(box => box.classList.value);
       //...and if every box in a winn-row(e.g [0],[1],[2]),then  return the winn.
        if (classes.every(cls => cls === 'box boxHuman') || classes.every(cls => cls === 'box boxComputer')) {
            return true;
        }
    }
    return false;
}
    function restart() {
       window.location.reload();//Feels safer then manually remove classList and moves etc.
    }

