/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Arrays
const PRONOUN = ["the", "our"];
const ADJ = ["great", "big"];
const NOUN = ["jogger", "racoon"];
const EXTENSION = [".com", ".es", ".net", ".us", ".io"];

let domainList = [];

// TOTALLY RANDOM DOMAIN NAME

// function that generates all possible combinations of the 4 given arrays

function generateDomain() {
  for (let i = 0; i < PRONOUN.length; i++) {
    for (let j = 0; j < ADJ.length; j++) {
      for (let k = 0; k < NOUN.length; k++) {
        for (let l = 0; l < EXTENSION.length; l++) {
          domainList.push(PRONOUN[i] + ADJ[j] + NOUN[k] + EXTENSION[l]);
        }
      }
    }
  }
  let randomIndex = Math.floor(Math.random() * domainList.length);
  // print de value of the new array
  document.getElementById("domainInput").value = domainList[randomIndex];
}

// CUSTOM RANDOM DOMAIN NAME
// function that generates all combinations given 3 arrays and a string
function generateCustomDomain() {
  // custonNoun gets the input and deletes spaces
  let customNoun = document.getElementById("customNounInput").value.trim();
  if (customNoun === "") {
    alert("Type a word for the noun");
    return;
  }

  let domains = [];
  for (let i = 0; i < PRONOUN.length; i++) {
    for (let j = 0; j < ADJ.length; j++) {
      for (let k = 0; k < EXTENSION.length; k++) {
        domains.push(PRONOUN[i] + ADJ[j] + customNoun + EXTENSION[k]);
      }
    }
  }

  let randomIndex = Math.floor(Math.random() * domains.length);
  // print de value of the new array in the input of HTML called customDomainInput
  document.getElementById("customDomainInput").value = domains[randomIndex];
}

// Print a list of oll the cominations
function printDomainList() {
  let listContainer = document.getElementById("listas");
  listContainer.textContent = ""; // Clean de div's content
  let ul = document.createElement("ul");

  domainList.forEach(function(domain) {
    let li = document.createElement("li");
    li.textContent = domain;
    ul.appendChild(li);
  });

  listContainer.appendChild(ul);
}

// Call the function for print de list when page is loaded
generateDomain();
window.onload = printDomainList;
