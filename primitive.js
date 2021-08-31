// javaScript data type hocche 7 ty. abog 2 ta border catagory ace.
/* // primitive data type.
1. Number.
2. String.
3. Boolean.
4. Undefine.
5. Null.
6. Symbol.
    // non-primitive data type
1. Object
 */
//primitive data type
let a = 10;
let b = a;
console.log(a, b);
a = 20;
console.log(a, b);

// non-primitive data type
const x = { job: 'web developer' };
const y = x;
console.log(x, y);
x.job = { job: 'front end developer' };
console.log(x, y)
    // { job: 'web developer' } { job: 'web developer' }
    // { job: { job: 'front end developer' } } { job: { job: 'front end developer' } }
    // karon hocche non-primitive tara akta refernce dory rakhe , muol object ta oy jaigai tai vitorer kono ogsho ta jodi change kory taholy 2 tai same tai non primitive 2 ta key change kory.