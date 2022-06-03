
       // Soon finish..needd computer random move
    window.addEventListener('DOMContentLoaded', (event) => {
       console.log('DOM fully loaded and parsed');
const table = Array.from(document.getElementsByClassName('box'));

let infoTxt = document.querySelector('h1');
let currenP = 'o';
let played = []  //no need
let table2 = new Array(9).fill(null);
//let isLeft = [1,2,3,4,5,6,7,8,9];
   const winnOptions =
     [
     [1,4,7],
     [2,5,8],
     [0,1,2],
     [2,4,6],
     [0,4,8],
     [3,4,5],
     [6,7,8],
     [0,3,6]
 ];
   //  GAME START
function myfunction(e){

 const boxArr = Array.from(document.getElementsByClassName('box'));
const index = boxArr.indexOf(e.target);
const free = boxArr.filter(box => box.innerHTML === "");
let pcMove = free[Math.floor(Math.random()*free.length)];
infoTxt.innerText = 'Human start'
table2[index] = currenP;
played.push(1)
if (currenP === 'o') {
this.classList.add('boxHuman')
infoTxt.innerHTML = 'pc\'s thinking...',infoTxt.style.color = 'red'
} else {
//  setTimeout(() {
  this.classList.add('boxComputer')
//played.push(1) //Give extra push's (Error)
 infoTxt.innerHTML = 'Human\'s turn',infoTxt.style.color = 'red'
}
//},1000});
if (winner()){
 alert(currenP + '  won. Restart ?')
restart()
}
//check for Draw
//if(!bord.some((e) => e === null)) alert('draw',Restart ?) restart()
if(played.length > 8 ){
alert('It\'s a Draw..Re-Mach ?')
restart()
}

currenP = currenP == 'o' ? 'x' : 'o';
}
//winning loop .  If some roww (1,2,3) *winnerOptiens.length is trur return ===  true.
const winner = () => {
 return winnOptions.some((combination) => {
   if(
currenP == table2[combination[0]]  &&
   table2[combination[0]] == table2[combination[1]] &&
   table2[combination[0]] == table2[combination[2]]
)
return true;
console.log('check winn   '+ '  playd '+played + 'table2  ' + table2)
return false;
});
}

function restart (){ //table.forEach(el => {el.classList.remove('boxC','boxH')});
for( i= 0; i< table.length; i++){
table[i].classList.remove('boxComputer','boxHuman')
infoTxt.innerText = 'NEW GAME '
currenP = 'o'
played.length = '';
table2.fill(null);
table[i].innerHTML = ''
table.forEach(box => {box.addEventListener('click',myfunction,{once:true})});

console.log('restart')
}}
//const on = () => {
table.forEach(box => {box.addEventListener('click',myfunction,{once:true})});
});
//const off = () => {
//table.forEach(box => {box.removeEventListener('click',myfunction)});} // Exprimential stuff
