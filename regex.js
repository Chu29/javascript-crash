// /a^....s$/
// new RegExp('')

// const regEx = new RegExp("alias");
// console.log(regEx);

// metacharacters = [] . ^ $ + ? {} () \ | *

// [] => brackets
// const bracMatch = /[abcd]/;
// const strBraces = "mangoes";

// [a-z0-9A-Z] helps to specify a range
// [1-4]
// [0-39] or [01239]
// [^a] match any character except a i.e when it is in the braces
// [^bcd] match any character except bcd
// . dot match one character
// .. match 2 characters
// ^ caret => used to match a sequence i.e sequence should start in that format
// ^90 will match 9021 but will not match 9421
// ^be will match best but will not match butter
// ^abc will match abcdif but will not match acbc

// $ dollar i.e should end with so so and so character(s)
// er$ will match center but will not match centre

// * star
// te* will match asterix,
// ma*n will match man, manner

// + plus
// must find one sequence of the pattern left to it e.g ma+n will match man, woman but will not match mn

// ? question mark.
// ma?n matches zero or one occurrences to the left.e.g  Will match mn, man, woman but will not match maan, main

// {n,m} curly braces
// a{2,3}: will match abaa, aadnf, will not match abc, dat

// | (alternation) works like the or operator
// a|b will match ade, acdbea but will not match cde

// () brackets - used to group
// (a|b|c)xz will match axz, bxz, cxz but not abxz, axzb

// \ backslash - escape
// b\$ will match 'b$adffosf', asaforndifonb$

//\b matches at the beginning or the end
// \bfoo : football, 'the foo', food but cannot match 'a football'

// \B does the opposite of \b

// \d matches any digits [0-9]

// \D does the opposite of \d [^0-9]

// \s matches any wite space character
// \s : 'a s' matches 1 time

// \S matches all non-whitespace characters

// \w matches any alphanumeric character i.e [a-zA-Z0-9_]

// \W matches all the special characters i.e [^a-zA-Z0-9_]

// the whitespace characters
// \t \n \r \v \f
/*
// practice with regex
let str = "Find me";

const regex = /me/;
let result = str.replace(regex, "world");
// console.log(result);
// console.log(regex.test(str));
// console.log(str.match(/nd/));

const spaceRegex = /\s/;
console.log(str.split(spaceRegex));

const str2 = "NoSpace";
console.log(str2.split(spaceRegex));

// /g global
const gRegex = /me/g;
str = "Find me and get me";
result = str.replace(gRegex, "us");
console.log("result: ", result);

// /i ignore case
const iRegex = /me/gi;
str = "Find Me and get me";
result = str.replace(iRegex, "us");
console.log("result: ", result);

// /m multiline
const mRegex = /^the/m;
str = `the first line
some random text the second line 
the third line
`;

let matches = str.match(mRegex);
console.log("matches: ", matches);

const mRegex2 = /line$/gm;
matches = str.match(mRegex2);
console.log("matches2: ", matches);
*/

// regex to validate email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailRegex2 = /\S+@\S+\.\S{2,}/g;
let emails = [
  "chu.amk22@gmail.com",
  "@chu.com",
  "m.com",
  "kezy_123#yahoo.co.uk",
  "leonard@gmail.com",
  "vanessa123_0@yahoo.co",
  "monalisa@g.c",
];

console.log("------Using EmailRegEx1------");
for (let i = 0; i < emails.length; i++) {
  if (emailRegex.test(emails[i])) {
    console.log("valid email: ", emails[i]);
  } else {
    console.log("Not valid ", emails[i]);
  }
}

console.log("\n------Using EmailRegEx2------");

for (const email of emails) {
  // if (emailRegex2.test(email)) {
  //   console.log("valid email: ", email);
  // } else {
  //   console.log("Not valid ", email);
  // }
  emailRegex2.test(email)
    ? console.log("valid email: ", email)
    : console.log("Not valid", email);
}
