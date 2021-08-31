/* 
Falsy:
false
0
empty string
indefine
null
NaN
-----------------------------------------------
Truthy:
true
any number (positive or negative)
any string including single whitespace"0" ' ';
[];
{};
enything else that is not falsy will be truthy.
*/
let x = [];
console.log('Varible is:', x)
if (x) {
    console.log('Varialble is truthy');
} else {
    console.log('Variable id falsy');
}