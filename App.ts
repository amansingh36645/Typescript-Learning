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

function sumArr() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum += arr[i]
  }

  return sum;
}

sumArr();

let arrName: string[] = ["Aman", "Sweetie", "Sonali", "Happy", "Prateek"];

function calName() {
  return arrName.length;
}

calName();

//Small Challenge

let firstName: string = "Aman Singh";
let marks: number = 55;
let ages: number = 24;
let pass: string = "Passed";

function result(num: number) {
  if (num >= 40) {
    return "Passed";
  } else {
    return "Failed";
  }
}

result(marks);

//Day 2

//Level 1

let names = "aman";
names = 23; //error type number is not assignable to string
let aged = 24;
aged = "old"; //error type string is not assignable to number
let isLoggedIn = true;
isLoggedIn = 3.21; //error type number is not assignable to boolean

let name1: string;
let age1: number;
let isLoggedIn1: boolean;

//Level 2

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

let user1: User = {
  id: 1,
  name: "aman",
  email: "aman@gmail.com",
  isActive: true,
};

let user2: User = {
  id: 2,
  name: "sweety",
  email: "sweety@gmail.com",
  isActive: false,
};

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

let product1: Product = {
  id: 0o1,
  name: "Laptop",
  price: 58000,
  category: "Electronic",
  inStock: true,
};

let product2: Product = {
  id: 0o2,
  name: "GPU",
  price: 600000,
  category: "Graphics",
  inStock: true,
};

let product3: Product = {
  id: 0o3,
  name: "Desktop",
  price: 12000,
  category: "Monitor",
  inStock: false,
};

function productsName(a: Product) {
  return a.name;
}

productsName(product1);
productsName(product2);
productsName(product3);

//Level 3 

interface Admin extends User{
  role:string,
  permission:string[],
}

let admin: Admin = {
  role:"All Access",
  permission: ["security","Survilance", "Modfy"],
  id:1,
  name:"Admin User",
  email:"admin@gmail.com",
  isActive:true
}

//Level 4 

type ProductId = number;
type ProductName = string;

interface ProductDetails{
  name:ProductName,
  totalStock:ProductId,
}

type Car = {
  brand:string,
  model:string,
  year:number,
  electric:boolean
}

let carObj: Car = {
  brand:"Toyota",
  model:"Supra",
  year:2019,
  electric:false
}

let carObj1: Car =  {
  brand:"BMW",
  model:"M5 Compitition",
  year:2025,
  electric:false
}

//Level 5

let UserId: number | string;
UserId = 25
UserId = "Aman"

let Status: "loading" | "success" | "error" 

Status = "Pending" // Throws error: Type '"Pending"' is not assignable to type '"loading" | "success" | "error"'

//Level 6

type Employee = {
  id:number,
  name:string,
  salary:number
}

type Developer = {
  language:string,
  yoe:number
}

type DeveloperEmployee = Employee & Developer  

let DeveloperEmployee: DeveloperEmployee = {
  id:1,
  name:"Aman",
  salary:3000000,
  language:"TypeScript",
  yoe:0
}

//Final Challenge

interface Person {
  id:number,
  name:string,
  email:string
}

interface Developers {
  skills:string,
  experince:number
}

interface Admin extends Person {
  role:string
}

let ApplicationStatus: "Pending" | "accepted" | "rejected"


type DeveloperPerson = Person & Developers