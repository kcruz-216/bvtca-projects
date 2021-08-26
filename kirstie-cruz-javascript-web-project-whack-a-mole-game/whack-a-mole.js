//Base Code Source: https://courses.wesbos.com/account/access/611daecbb36fe451adb8ae0b/view/194158577
const holes = document.querySelectorAll('.hole');
const scoreCount = document.querySelector('.score-count');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole === lastHole){
        console.log('No not again!');
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1500);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
      hole.classList.remove("up");
      if (!timeUp) peep();
    }, time);
  }
  
function startGame() {
    scoreCount.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => (timeUp = true), 30000);
  }
  
function whack(e) {
    if (!e.isTrusted) return; // cheater!
    score++;
    this.classList.remove("up");
    scoreCount.textContent = score;
  }
  
  moles.forEach(mole => mole.addEventListener("click", whack));