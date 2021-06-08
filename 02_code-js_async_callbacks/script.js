"use strict";
console.log("JS finished loading");

let dropdownSection = document.getElementById("dropdown-section");
let toggleButton = document.getElementById("hide-div");

dropdownSection.classList.add("open");

const onClick = () => {
  console.log("You clicked the button");
  setTimeout(() => {
    let text;
    if (toggleButton.innerText === "Hide") {
      text = "Show";
    } else {
      text = "Hide";
    }
    toggleButton.innerText = text;
    dropdownSection.classList.toggle("close");
    console.log("Time is up");
  }, 3000);
};

toggleButton.addEventListener("click", onClick);

console.log("Some button has been clicked");
setTimeout(() => {
  // Doing a lot of crazy thing before time is up ....
  // Doing a lot of crazy thing before time is up ....
  // Doing a lot of crazy thing before time is up ....
  console.log("Time is up");
}, 1000);
console.log("Timer is running");
