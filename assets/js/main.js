const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const output = document.querySelector("h1");
const h3 = document.querySelector("h3");

let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." },
];
let letterBig;
let letter;
submit.addEventListener("click", () => {
  h3.innerHTML = "";
  output.innerHTML = "";
  letter = input.value;
  letterBig = input.value.split("");
  console.log(letterBig);
  for (let i = 0; i < letter.length; i++) {
    for (let j = 0; j < morseAlphabet.length; j++) {
      console.log(morseAlphabet[j].morseCode);
      if (letter[i].toUpperCase() == morseAlphabet[j].letter) {
        output.innerHTML += morseAlphabet[j].morseCode;
        h3.innerHTML += `<p>${letter[i]} = ${morseAlphabet[j].morseCode}</p>`;
      }
    }
  }
  input.value = "";
  console.log(letter);
});
