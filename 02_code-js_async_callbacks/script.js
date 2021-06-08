"use strict";
console.log("JS finished loading");

let dropdownSection = document.getElementById("dropdown-section");
let toggleButton = document.getElementById("hide-div");

dropdownSection.classList.add("open");

const onClick = () => {
  setTimeout(() => {
    if (this.innerText === "Hide") {
      this.innerText = "Show";
    } else {
      this.innerText = "Hide";
    }
    dropdownSection.classList.toggle("close");
    console.log("Time is up");
  }, 500);
};

toggleButton.addEventListener("click", onClick);

/* console.log("Some button has been clicked");
setTimeout(() => {
  // Doing a lot of crazy thing before time is up ....
  // Doing a lot of crazy thing before time is up ....
  // Doing a lot of crazy thing before time is up ....
  console.log("Time is up");
}, 1000);
console.log("Timer is running"); */
