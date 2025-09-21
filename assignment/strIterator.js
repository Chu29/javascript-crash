function displayVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const iterator = str[Symbol.iterator]();
  let result = iterator.next();
  let vowelStr = "";

  while (!result.done) {
    if (vowels.has(result.value)) {
      vowelStr += result.value;
    }
    result = iterator.next();
  }
  console.log(vowelStr);
}

function displayConsonant(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const iterator = str[Symbol.iterator]();
  let result = iterator.next();
  let consonantStr = "";

  while (!result.done) {
    if (!vowels.has(result.value)) {
      consonantStr += result.value;
    }
    result = iterator.next();
  }
  console.log("The string contains: ", consonantStr, "consonants");
}

displayVowels("Hello Chu");
displayConsonant("Hello Chu");
