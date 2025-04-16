    // Mouse table function for hover effect here reduce problems like name conflicts.
const mousetable = Array.from(document.getElementsByClassName('box'));

// MouseOver & mouseOut for all spots
mousetable.forEach(box => {
    box.addEventListener('mouseover', myfunction1);
    box.addEventListener('mouseout', myfunction2); 
});

// Set the background image on mouseover
function myfunction1() {
    if (!this.classList.contains('boxComputer')) { 
        this.style.backgroundColor = '#FFA000'; //  boxHuman color
        this.style.backgroundImage = "url('img/o.svg')"; // boxHuman-image

    }
}

// Function mouseout
function myfunction2() { 
    if (!this.classList.contains('boxComputer')) { 
        this.style.backgroundColor = ''; 
        this.style.backgroundImage = ''; 
    }
}
// Get the table to play on (array)
const table = Array.from(document.querySelectorAll('.box'));

let currenP = 'o'; // Player 'o' starts
let movesPlayed = []; // counter 

// Possible Winn combinations[row 1 to row 8]
const winnCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Add Event listener to each box ,click and touchstart
table.forEach(box => {
    box.addEventListener('click', myfunction);
    box.addEventListener('touchstart', myfunction); // touchstart for toutc device  like iPhone and many tabs etc.
});

// GAME START
function myfunction(e) {
    e.preventDefault(); // don't add classList by touch events,yet.
    // Need index of clicked box
    const boxArr = Array.from(document.getElementsByClassName('box'));
    const index = boxArr.indexOf(e.target);

    // Player 'o' move
    if (currenP === 'o') {
        table[index].classList.add('boxHuman');
        movesPlayed.push(index);
    } else {
        // Computer's move ('x')
        table[index].classList.add('boxComputer');
        movesPlayed.push(index);
    }

    // Check for winner
    if (checkWinner()) {
        setTimeout(() => {
            alert(currenP + " " + " wins! Restart?");
            restart();
        }, 100);
        return;
    }

    // Switch to the next player
    currenP = currenP === 'o' ? 'x' : 'o';

    // If all moves are played, it's a draw
    if (movesPlayed.length === 9) {
        setTimeout(() => {
            alert("Draw! Restart?");
            restart();
        }, 100); // Using setTimeout so 'boxComputer' got time to add 'x' svg to table.
        return;
    }

    // If computer's turn, computer move
    if (currenP === 'x') {
        setTimeout(computerMove, 300);  // Simulate pc think.
    }
}

// Function to check the winner speak for itself.
function checkWinner() {
    for (let combo of winnCombos) {
        const boxes = combo.map(index => table[index]);
        const classes = boxes.map(box => box.classList.value);
        if (classes.every(cls => cls === 'box boxHuman') || classes.every(cls => cls === 'box boxComputer')) {
            return true;
        }
    }
    return false;
}

// Function to make the computer's move
function computerMove() {
    // Find all empty boxes
    const availableMoves = table
        .map((box, index) => (box.classList.contains('boxHuman') || box.classList.contains('boxComputer')) ? null : index)
        .filter(index => index !== null);

    // Randomly choose available move for computer
    const move = availableMoves[Math.floor(Math.random() * availableMoves.length)];

    // Simulate computer click 
    const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    table[move].dispatchEvent(event);
}

// Restart the game
function restart() {
    window.location.reload();
}

