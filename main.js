const buttonBox = document.getElementById("box__inside");
const buttonArray = document.getElementsByClassName("button");
const resetButton = document.getElementById("resetButton");
const para = document.getElementById("para");
const body = document.body;
const len = buttonArray.length;
const box = document.getElementById("playBox");

const play = document.createElement("button");
play.textContent = "Play";
box.appendChild(play);
play.addEventListener("click", start);
play.style.backgroundColor = "Green";
play.style.padding = "10px";
play.style.fontSize = "25px";
play.style.border = "1px solid green";
play.style.color = "white";
play.style.borderRadius = "10px";
play.style.cursor = "pointer";

function start() {
  box.removeChild(box.lastElementChild);
  console.log("Inside start");
  // const playButton = document.getElementById('playButton');
  let x = 1;
  let game = 1;
  playerA = "";
  playerB = "";
  let A_win = 0;
  let B_win = 0;
  let draw = 0;
  let win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const winLen = win.length;
  setTimeout(() => {
    playerA = prompt("Enter the name of player A");
    setTimeout(() => {
      playerB = prompt("Enter the name of player B");
      if (playerA.length == 0) playerA = "Player A";
      if (playerB.length == 0) playerB = "Player B";
      countA = document.getElementById("count__A");
      countB = document.getElementById("count__B");
      tie = document.getElementById("tie");
      countA.innerHTML = `<h3>${playerA}</h3><h3>${A_win}</h3>`;
      countB.innerHTML = `<h3>${playerB}</h3><h3>${B_win}</h3>`;
      tie.innerHTML = `<h3>Tie</h3><h3>${draw}</h3>`;
      if (game % 2 == 0) {
        para.textContent = `Its ${playerB} turn`;
        x += 1;
      } else para.textContent = `Its ${playerA} turn`;
      let aMove = [];
      let bMove = [];
      let u = 0;
      for (let i = 0; i < len; i++) {
        buttonArray[i].addEventListener("click", () => {
          // console.log(x, game);
          let content = buttonArray[i].textContent;
          if (content == "O" || content == "X") {
            x -= 1;
          } else if (x % 2 == 1) {
            buttonArray[i].textContent = "O";
            aMove.push(i + 1);
            para.textContent = `Its ${playerB} turn`;
          } else {
            bMove.push(i + 1);
            buttonArray[i].textContent = "X";
            para.textContent = `Its ${playerA} turn`;
          }
          x += 1;
          aMove.sort();
          bMove.sort();
          let winA = false;
          let winB = false;
          let dr = false;
          for (let i = 0; i < winLen; i++) {
            let aa = win[i][0];
            let bb = win[i][1];
            let cc = win[i][2];
            if (
              aMove.includes(aa) &&
              aMove.includes(bb) &&
              aMove.includes(cc)
            ) {
              winA = true;
              break;
            }
            if (
              bMove.includes(aa) &&
              bMove.includes(bb) &&
              bMove.includes(cc)
            ) {
              winB = true;
              break;
            }
          }
          if (winA) {
            setTimeout(() => {
              alert(`Congratulations ${playerA} Win`);
            }, 100);
            A_win += 1;
            u += 1;
          } else if (winB) {
            setTimeout(() => {
              alert(`Congratulations ${playerB} Win`);
            }, 100);
            B_win += 1;
            u += 1;
          } else if (game % 2 == 0 && x == 11) {
            setTimeout(() => {
              alert(`Match Draw`);
            }, 100);
            draw += 1;
            u += 1;
          } else if (game % 2 == 1 && x == 10) {
            setTimeout(() => {
              alert(`Match Draw`);
            }, 100);
            draw += 1;
            u += 1;
          }
          console.log(winA, winB);
          setTimeout(() => {
            if (u == 1) {
              game += 1;
              // console.log(game);
              x = 1;
              if (game % 2 == 0) x += 1;
              for (let i = 0; i < len; i++) {
                buttonArray[i].textContent = "";
                // para.textContent = "Its O turn";
              }
              // playButton.addEventListener('click',start);
              // start();
              winA = false;
              winB = false;
              dr = false;
              u = 0;
              aMove = [];
              bMove = [];
              countA.innerHTML = `<h3>${playerA}</h3><h3>${A_win}</h3>`;
              countB.innerHTML = `<h3>${playerB}</h3><h3>${B_win}</h3>`;
              if (game % 2 == 0) {
                para.textContent = `Its ${playerB} turn`;
              } else para.textContent = `Its ${playerA} turn`;
              tie.innerHTML = `<h3>Tie</h3><h3>${draw}</h3>`;
            }
          }, 300);
        });
      }
      resetButton.addEventListener("click", () => {
        for (let i = 0; i < len; i++) {
          buttonArray[i].textContent = "";
          x = 1;
          // para.textContent = "Its O turn";
        }
      });
    }, 500);
  }, 1000);
}
// buttonBox.addEventListener('click',()=>{

//     console.log("Button is clicked!!!");
// })
