'use strict'

const msg = document.getElementById("message")
console.log(msg);

const btn = document.getElementsByName("language")
console.log(btn);

const heading = document.getElementsByTagName("h1")
console.log(heading);

const title = document.getElementsByClassName("title")
console.log(title);


// Manipulating HTML Elements

let div = document.createElement('div')
div.innerHTML = "<h1>Hola amigo</h1>"

document.body.appendChild(div)

console.log(div);