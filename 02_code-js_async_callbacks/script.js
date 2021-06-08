"use strict";
console.log("JS finished loading");

let dropdownSection = document.getElementById("dropdown-section");
let toggleButton = document.getElementById("hide-div");

dropdownSection.classList.add("open");

toggleButton.addEventListener("click", onClick);

function onClick(event) {
  let text;
  if (this.innerText === "Hide") {
    text = "Show";
  } else {
    text = "Hide";
  }
  this.innerText = text;
  dropdownSection.classList.toggle("close");
}
