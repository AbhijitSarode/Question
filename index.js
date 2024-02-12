
let btn = document.getElementById("magic");
let txt = document.querySelector(".text");
let yesBtn = document.querySelector(".yes");
let noBtn = document.querySelector(".no");


btn.addEventListener("click", function () {
  btn.style.transition = "all 0.5s";
  btn.style.transform = "scale(1.2) rotate(720deg)"; // Added rotation here
  btn.innerText = "Simplified!!";
});

let noBtnClickCount = 0;

noBtn.addEventListener("click", function () {
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  setTimeout(() => {
    noBtn.style.display = "block";
  }, 1000);

  noBtnClickCount++;

  switch (noBtnClickCount) {
    case 1:
      txt.style.display = "block";
      txt.innerText = "Fuck you & try again";
      yesBtn.style.display = "block"
      break;
    case 2:
      txt.innerText = "Stop being a bitch and hit Yes";
      yesBtn.style.display = "block"
      break;
    case 3:
      txt.innerText = "Oh so this is how its gonna be? Hit No one more time";
      yesBtn.style.display = "block"
      break;
    case 4:
      txt.innerText = "Hi Ha Ha 😈"
      noBtn.remove()
      noBtn.style.display = "none";
      yesBtn.style.display = "block"
      break
    default:
      break;
  }
});


yesBtn.addEventListener("click", function () {
  noBtn.remove()
  yesBtn.remove()
  noBtnClickCount++;

  switch (noBtnClickCount) {
    case 1:
      txt.innerText = "Seriously?? In first attempt??? SMH";
      break;
    case 2:
      txt.innerText = "Was is so hard??";
      break;
    case 3:
      txt.innerText = "That was fun. Thanks for being my valentine 😘";
      break;
    case 4:
      txt.innerText = "What is fuck is your problem??"
      break
    case 5:
      txt.innerHTML = "You thought you could say no to me??"
    default:
      break;
  }
});

