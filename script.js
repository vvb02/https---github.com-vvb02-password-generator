const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";

let generateBtn = document.querySelector("button");
let passEl = document.querySelector(".pass-el");
let uppercaseEl = document.querySelector("#uppercase");
let lowercaseEl = document.querySelector("#lowercase");
let numberEl = document.querySelector("#number");
let symbolEl = document.querySelector("#symbol");

generateBtn.addEventListener("click", function () {
  let passLength = 11;
  passEl.innerHTML = "";

  let selectedChars = "";
  if (uppercaseEl.checked) {
    selectedChars += uppercaseChars;
  }
  if (lowercaseEl.checked) {
    selectedChars += lowercaseChars;
  }
  if (numberEl.checked) {
    selectedChars += numberChars;
  }
  if (symbolEl.checked) {
    selectedChars += symbolChars;
  }

  if (selectedChars === "") {
    passEl.innerHTML = "Please select at least one character set.";
    return;
  }

  let charArray = selectedChars.split("");
  let shuffledArray = shuffle(charArray);
  let password = shuffledArray.slice(0, passLength).join("");

  passEl.innerHTML = password;
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
