// What is a Callback Function in JavaScript

// -- Functions are First Class Citizens in JS. That means we can take a function and pass it into another function. And when we do so, the function passed into the "called function" is known as Callback function.

// -- this  callbacks are very powerful in js. This gives us access to whole Asynchronous world in a synchronous single-threaded language

// -- Ex
/*
function x(y) {
    y();
    console.log("x called");

} 

x(function y() { // this function (y) is called a as function 
    console.log("y called");
})
*/
// -- Why it is 'callback' function -- think
// we pass that function and that function is called after some time later. 
// In above example the callback function 'y' is passed into x and now it is upto x when it has to call callback function 'y'.


// -- How it is used in asynchronous task
// -- The first arg is the callback function and the setTimeout executes after some time that is the second parameter(no of millisecs).
/*
setTimeout(function () {
    console.log("timer");
}, 5000); // -- Javascript DOESN'T WAIT here for setTimeout to complete.
*/
// -- That is why Callback functions give the power of Asynchronity.

// Js is a synchronous and single-threaded language

// Blocking the main thread

// Power of Callbacks?

// Deep about Event Listeners

// Scope Demo with Event Listeners



// -- attaching a click handler to the button.

// when js executes this code line 'document.getElementById....' It will pickup that button (#clickMe) and ADD an EventListener name (event) is click and when that button is clicked or when that event is occured, the js call that callback function. ie the Callback function automatically comes inside the CALLSTACK.
/*
document.getElementById("clickMe").addEventListener("click", function xyz() { // this function is a callback function.
    console.log("Button Clicked");
})
*/

// Clousers along with EventListeners

function attachEventListeners() {
    var count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
        console.log("Button Clicked", ++count);
    });
}

attachEventListeners();

// Garbage Collections & removeEventListerners

// -- Q. Why do we need to remove EventListeners

// EventListeners are Heavy ie It takes up memory. It kind of forms a Closure. (like in above example with count). And even when the call stack is empty (we are not executing any code) but still this program is not freeing up the memory. 

// That is why event listeners are Heavy.