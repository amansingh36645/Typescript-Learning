//Day 1

//Level 1

let name: string = "Aman";
let age: number = 24;
let isEmployed: boolean = false;
let salary: number = 25000;

let productName: string = "Laptop";
let price: number = 55000;
let quantity: number = 2;
let isAvailable: boolean = true;

//Level 2

function add(a: number, b: number) {
  return a + b;
}

add(10, 20);

function greet(name: string) {
  let greeting = `Hello ${name}`;
  return greeting;
}

greet(name);

//Level 3

let arr: number[] = [10, 20, 30, 40, 50];

function sumArr(){
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    // sum += arr[i]
    
  }

  return sum
}  

sumArr()


let arrName: string[] = ["Aman", "Sweetie", "Sonali", "Happy", "Prateek"];

function calName() {
  return arrName.length
}

calName();

//Small Challenge

let firstName: string = "Aman Singh"
let marks: number = 55;
let ages: number = 24
let pass:string = "Passed" 

function result(num:number){
  if(num >= 40){
    return "Passed"
  } else {
    return "Failed"
  }
}

result(marks)

