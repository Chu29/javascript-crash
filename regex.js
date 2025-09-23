// /a^....s$/
// new RegExp('')

const regEx = new RegExp("alias");
console.log(regEx);

// metacharacters = [] . ^ $ + ? {} () \ | *

// [] => brackets
const bracMatch = /[abcd]/;
const strBraces = "mangoes";

// [a-z0-9A-Z]
// [1-4]
// [0-39] or [01239]
// [^a] match any character except a i.e when it is in the braces
// [^bcd] match any character except bcd
// .
// ..
// ^ caret => used to match a sequence i.e sequence should start in that format
// ^90 will match 9021 but will not match 9421
// ^be will match best but will not match butter
// ^abc will match abcdif but will not match acbc

// $ dollar
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
