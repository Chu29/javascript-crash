function displayVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let i = 0;
  return {
    next() {
      while (i < str.length && !vowels.has(str[i].toLowerCase())) {
        i++;
      }
      return {
        value: i >= str.length ? undefined : str[i],
        done: i++ > str.length ? true : false,
      };
    },
  };
}

function displayConsonant(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let i = 0;

  return {
    next() {
      while (i < str.length && vowels.has(str[i].toLowerCase())) {
        i++;
      }
      return {
        value: i >= str.length ? undefined : str[i],
        done: i++ > str.length ? true : false,
      };
    },
  };
}

const vowels = displayVowels("Hello Chu");
console.log("------Vowels------");
console.log(vowels.next());
console.log(vowels.next());
console.log(vowels.next());
console.log(vowels.next());
console.log(vowels.next());
console.log(vowels.next());
console.log(vowels.next());
console.log(vowels.next());
console.log(vowels.next());
console.log(vowels.next());

const consonants = displayConsonant("Hello Chu");
console.log("------Consonants------");
console.log(consonants.next());
console.log(consonants.next());
console.log(consonants.next());
console.log(consonants.next());
console.log(consonants.next());
console.log(consonants.next());
console.log(consonants.next());
console.log(consonants.next());
console.log(consonants.next());
console.log(consonants.next());
