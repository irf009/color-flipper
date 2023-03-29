const btn = document.querySelector(".btn");
const colorText = document.querySelector(".color-text");
const resetBtn = document.querySelector(".reset-btn");
const copyBtn = document.querySelector(`.copy-btn`);
const copied = document.querySelector(`.copied`);
let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", function (e) {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[getRandomHexValue()];
  }
  colorText.innerHTML = color;
  //   colorText.style.color = color;
  document.body.style.backgroundColor = color;
  copied.style.display = `none`;
});

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(colorText.innerHTML);
    copied.style.display = `block`;
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

resetBtn.addEventListener("click", function (e) {
  colorText.innerHTML = "#f1f5f8";
  colorText.style.color = "#49a6e9";
  document.body.style.backgroundColor = "#f1f5f8";
  copied.style.display = `none`;
});

function getRandomHexValue() {
  return Math.floor(Math.random() * hexValues.length);
}
