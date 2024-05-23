// function buildGreeting(message) {
//     return function (audience) {
//         return message + " " + audience;
//     };
// }
// let greeting1 = buildGreeting("Hi");
// let greeting2 = buildGreeting("Hello");
// console.log(greeting1("User")); // Hi User console.log(greeting2('World')); // Hello World
for (let id = 0; id < 3; id++) {
    // The use of 'let' creates a block-scoped variable, fixing the closure issue.
    // Now each setTimeout callback captures the correct value of 'id'.
    setTimeout(function () {
      console.log('seconds: ' + id);
    }, id * 1000);
  }

// // Initiate counter
//  let counter = 0;

// // Function to increment counter
// function add(a) {
//  return counter += 1;
// }

// // Call add() 3 times
// console.log(add());
// console.log(add());
// console.log(add());

// // The counter should now be 3 

// Initiate counter
let counter = 0;

// Function to increment counter
// function add() {
//   let counter = 0;
//   return counter += 1;
// }

// // Call add() 3 times
// console.log(add());
// console.log(add());
// console.log(add());

//The counter should now be 3. But it is 0 