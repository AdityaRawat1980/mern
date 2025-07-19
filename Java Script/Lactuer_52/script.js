let paraElement = document.getElementById("spara");
console.log(paraElement.style);
paraElement.style.backgroundColor = 'green';
let secondElement = document.getElementById("sdiv");
console.log(secondElement);
secondElement.style.cssText = "background-Color: black; color: white ;padding: 0.5v rem ";
let firstElement = document.querySelector("#fdiv");
console.log(firstElement);
firstElement.setAttribute('class','divclass');
firstElement.setAttribute('class','secdivclass');

console.log(firstElement)
let firstDiv = document.getElementsByClassName("divclass");
console.log(firstDiv); 
let firstd = querySelector("#fdiv");

