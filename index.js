// ---Lec-12

// #1
// function outer() {

//   function inner() {
//     console.log(a);
//   }
// var a = 10; // perfectly okay, still closure captures this.
//   let a = 10; // a has BLOCK Scope, but still no change 
//   return inner;
// }

// outer()();

// #2
// function outer(b) {
//   function inner() {
//     console.log(a, b);
//   }
//   let a = 10;
//   return inner;
// }

// var close = outer(600);
// close();

// #3 Increased one more outer function super parent lexical scope  
// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//   return inner;
//   }
//   return outer;
// }
// var close = outest()("helloworld");
// close();

// #4 what if we have global conflicting name variable
// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//   return inner;
//   }
//   return outer;
// }
// // adding a conflicting name
// let a = 100; // Completely new variable in global scope.. the code still outputs the same output 
// var close = outest()("helloworld");
// close();

// #5 Data abstraction data hiding and encapsulation; Advantages of Closures

// var count = 0;
// function incrementCounter() {
//   count++;
// }
// The major flaw with this code is anybody in our code can access this counter variable and modify it.

// to achieve data hiding we use closure

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   }
// }
// counter()();
// if anybody from outside it throws a RefereceError. 
// So we have achieved privacy over out data.

// console.log(count); // gives error


// #5.1 to increment the counter

// function counter() {
//   var count = 0;
//   function incrementCounter() {
//     count++;
//     console.log(count);
//   }
//   return incrementCounter;
// }

// var counter1 = counter();
// counter1();
// counter1();
// counter1();
// counter1();

// var counter2 = counter(); // fresh counter .. will again a new closure whenever the function is run.
// counter2();

// the above code is Not good in terms of scalability.

// # Constructor function in javascript

// // This is like a constucter function it constructs a new counter whenever a new function is called and gives us.
// function Counter() {
//   var count = 0;

//   // incrementCounter has still closuer with the count variable. still data is hidden.
//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   }
//   // decrementCounter has still closuer with the count variable. still data is hidden.
//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   }

// }

// var counter1 = new Counter(); // 'new' keyword since it is a constructor function. 
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();


// =========== END of Lec-12 =================

//=========== Lec-11 setTimeout + closures

// var i = 1;
// function x() {
//   setTimeout(function () {
//     console.log(i)
//   }, 1000);
//   console.log("Namastey Javascript");
// }
// x();


// function x() {
//   for(let i = 1; i<= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Namastey Javascript");
// }
// x();


// function x() {
//   for(let i = 1; i<= 5; i++) {
    
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     // every time we call close(i), it creates a new copy of i 
//     close(i); 
//   }
//   console.log("Namastey Javascript");
// }
// x();


// ------ L- 11 END ----

// ==== First Rough ================

// z = 68;
// var x = 10;
// console.log(typeof(z));
// z = true;
// console.log(typeof(z));


// console.log(x, z);

//=========== Lecture - 10=====

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }

// z = x();
// console.log(z);
// z()

// going in one level deep in the lexical scope
// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//           console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

// some more depth O.O

// function a() {
//   var c = 600;
//   function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//           console.log(a, b, c);
//         }
//         y();
//     }
//     x();
//   }
//   z();
// }
// a();

