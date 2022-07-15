// Hoisting
// A variable can be used before it declare
//console.log(x);
//var x=10;   // output undifined
//**************************************************************************


// Diffrence between Let, cons, var
// let and cons can only use in its block. outside block it can not use
// var a = 10;
// function x () {
// let b = 20;
// const c = 30;
// console.log(`In side block a = ${b} & b = ${c}`)
// }
// x();
// console.log(a);
// console.log(`out side block a = ${b} & c = ${c}`)  // output : b i not define
//******************************************************************************** */

// closure *******
//closure is a function along with lecxical scope or parent scope.

// function x() {
//     var a = 10;
//     function y () {
//         console.log(a);
//     }
//     y();
// }
// x();  // output : 10. bcause a i declear in a function and console in y function.
// ******************************************************************************************


// Call , Apply & BInd ************
// let user = {
//     name: "palash",
//     email : "palash@gmail.com",
// }
// let userDetail = function (add,pin) {
//  console.log(`my name ${this.name} and email ${this.email} and address ${add} and pin ${pin}`)
// }

// userDetail.call(user, "kolkata", "733158") // call method

// userDetail.apply(user, ["kolkata","733158"]) // apply method

// let allDetail = userDetail.bind(user, "kolkata","733158")
// console.log(allDetail);
// allDetail(); // bind method. 

// ******************************************************************************************
