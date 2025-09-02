const msg = 
  'This message is going to ' +
  'take a couple of lines. This is our first ' +
  'multi-line string'

const msg1 =
  'This message is going to \
take a couple of lines. This is our first \
multi-line string'

console.log(msg);
console.log(msg1);

console.log(msg.length);
console.log(msg1.length);

let name = 'Chu'
let greetings = `Hi ${name}`
console.log(greetings);

//creating strings using the String() method

let school = new String('REBASE')
console.log(school);
console.log(school[0]);

// charAtIndex
console.log(school.charAt(4));

// split
let schoolNameArray = school.split('')
console.log(schoolNameArray);

// concat
schoolNameArray[4] = 'Z'
console.log(schoolNameArray.toString());

// toLowerCase
console.log(school.toLowerCase());

// replace


// trim()

// search, includes