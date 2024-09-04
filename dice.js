const firstRandom = Math.floor(Math.random() * 6) + 1;
const secondRandom = Math.floor(Math.random() * 6) + 1;

const firstDice = "images/dice" + firstRandom + ".png";
document.querySelectorAll("img")[0].setAttribute("src", firstDice);

const secondDice = "images/dice" + secondRandom + ".png";
document.querySelectorAll("img")[1].setAttribute("src", secondDice);

if (firstRandom > secondRandom) {
    document.querySelector("h1").innerHTML = "User 1 is a Winner!";
} else if (firstRandom < secondRandom) {
    document.querySelector("h1").innerHTML = "User 2 is a Winner!";
} else {
    document.querySelector("h1").innerHTML = "It is a Draw!";
}