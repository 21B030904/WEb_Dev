//Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:
//
ucFirst("john") == "John";



//solution

//We can’t “replace” the first character, because strings in JavaScript are immutable.
//
// But we can make a new string based on the existing one, with the uppercased first character:
//
let newStr = str[0].toUpperCase() + str.slice(1);
// There’s a small problem though. If str is empty, then str[0] is undefined, and as undefined doesn’t have the toUpperCase() method, we’ll get an error.
//
// The easiest way out is to add a test for an empty string, like this:
//
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("john") ); // John