/* 
1. variable value not assigned
2. function but didn't write return anything.
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. expliceitly  set value to undefined

*/

let first;
// console.log(first);

function second(x, y) {
    const sum = x + y;
}
const result = second(3, 4);
// console.log(result);

function add(a, b) {
    const sum = a + b;
    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}
const fourth = add(20, 1);
// console.log(fourth);

function double(a, b) {
    const result = a * b;
    // console.log(b);
    return result;
}
double(81);

const fifth = { name: 'sagor', age: 34, location: 'bandarbon' };
// console.log(fifth.phone);
const sixth = [43, 34, 23, 45];
// console.log(sixth[4]);
delete sixth[2];
console.log(sixth[2]);

const seventh = undefined;
// console.log(seventh);


// null mane nai . undefine mane koro karone define kory nai.
const myObject = { name: 'sagor', profession: null }