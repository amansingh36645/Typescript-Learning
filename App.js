"use strict";
//Day 1
Object.defineProperty(exports, "__esModule", { value: true });
//Level 1
let name = "Aman";
let age = 24;
let isEmployed = false;
let salary = 25000;
let productName = "Laptop";
let price = 55000;
let quantity = 2;
let isAvailable = true;
//Level 2
function add(a, b) {
    return a + b;
}
add(10, 20);
function greet(name) {
    let greeting = `Hello ${name}`;
    return greeting;
}
greet(name);
//Level 3
let arr = [10, 20, 30, 40, 50];
function sumArr() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum += arr[i]
    }
    return sum;
}
sumArr();
let arrName = ["Aman", "Sweetie", "Sonali", "Happy", "Prateek"];
function calName() {
    return arrName.length;
}
calName();
//Small Challenge
let firstName = "Aman Singh";
let marks = 55;
let ages = 24;
let pass = "Passed";
function result(num) {
    if (num >= 40) {
        return "Passed";
    }
    else {
        return "Failed";
    }
}
result(marks);
//# sourceMappingURL=App.js.map