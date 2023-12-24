/* eslint-disable */
import "bootstrap";
import "./style.css";
import { bottom } from "@popperjs/core";
import { name } from "file-loader";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["♦", "♥", "♠", "♣"];
  let decks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let suit = Math.floor(Math.random() * suits.length);
  let deck = Math.floor(Math.random() * decks.length);

  start.innerHTML = suits[suit];
  end.innerHTML = suits[suit];
  number.innerHTML = decks[deck];

  let setColor =
    suits[suit] == "♦" || suits[suit] == "♥" ? "text-danger" : "text-dark";

  start.className = setColor;
  end.className = setColor;
  number.className = setColor;
};
