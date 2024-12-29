const advices = document.querySelector(".advice");
const adviceId = document.querySelector(".adviceId");

document.querySelector(".button").addEventListener("click", () => {
  getAdvice();
});

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const { id, advice } = data.slip;
      advices.innerText = `"${advice}"`;
      adviceId.innerText = id;
    });
}

getAdvice();
