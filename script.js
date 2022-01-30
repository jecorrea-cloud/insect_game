const screen = document.querySelectorAll(".screen");
// console.log(screen);
// screen[0].classList.add(".up");

// Bring down the rest of the elements
const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
const start_btn = document.getElementById("start-btn");
const game_container = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");
let seconds = 0;
let score = 0;
let selected_insect = {};

start_btn.addEventListener("click", () => screen[0].classList.add(".up"));

choose_insect_btns.forEach((button) => {
  button.addEventListener("click", () => {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_insect = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  console.log("Here is where magic happens");
  setInterval(increaseTime, 1000);
}
