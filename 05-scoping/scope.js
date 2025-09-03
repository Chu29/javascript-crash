let a = 2;

greet();

function greet() {
  var a = 3
  var b = 4
  console.log(a + b);
}

greetNew();

let greetNew = function() {
  console.log('Hello New');
}

greetNew();