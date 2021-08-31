 const fourth = 39; //global scope

 function add(first, second) {
     // console.log(mood); // hoisting (var mood)
     const result = first + second;
     //  console.log(fourth);
     if (result > 9) {
         mood = 'happy';
         mood = 'cranky';
         //  console.log(mood);
     }
     return result;

 }
 const three = add(12, 32);
 //  console.log(result); block scope
 //  console.log(mood);

 for (let i = 0; i < 10; i++) {

 }
 console.log(i);