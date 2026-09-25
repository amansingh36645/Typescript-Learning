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

interface Admin extends User {
  role: string;
  permission: string[];
}

let admin: Admin = {
  role: "All Access",
  permission: ["security", "Survilance", "Modfy"],
  id: 1,
  name: "Admin User",
  email: "admin@gmail.com",
  isActive: true,
};

//Level 4

type ProductId = number;
type ProductName = string;

interface ProductDetails {
  name: ProductName;
  totalStock: ProductId;
}

type Car = {
  brand: string;
  model: string;
  year: number;
  electric: boolean;
};

let carObj: Car = {
  brand: "Toyota",
  model: "Supra",
  year: 2019,
  electric: false,
};

let carObj1: Car = {
  brand: "BMW",
  model: "M5 Compitition",
  year: 2025,
  electric: false,
};

//Level 5

let UserId: number | string;
UserId = 25;
UserId = "Aman";

let Status: "loading" | "success" | "error";

Status = "Pending"; // Throws error: Type '"Pending"' is not assignable to type '"loading" | "success" | "error"'

//Level 6

type Employee = {
  id: number;
  name: string;
  salary: number;
};

type Developer = {
  language: string;
  yoe: number;
};

type DeveloperEmployee = Employee & Developer;

let DeveloperEmployee: DeveloperEmployee = {
  id: 1,
  name: "Aman",
  salary: 3000000,
  language: "TypeScript",
  yoe: 0,
};

//Final Challenge

interface Person {
  id: number;
  name: string;
  email: string;
}

interface Developers {
  skills: string;
  experince: number;
}

interface Admin extends Person {
  role: string;
}

let ApplicationStatus: "Pending" | "accepted" | "rejected";

type DeveloperPerson = Person & Developers;

//revision
// basic intersection

type Users = {
  id: number;
  name: string;
};

type Contacts = {
  email: string;
  phone: string;
};

type UserContact = Users & Contacts;

let UserDetails: UserContact = {
  id: 101,
  name: "Aman",
  email: "amansingh@gmail.com",
  phone: "99999999999",
};

//Intersection with Different Responsibilities

type Products = {
  productId: number;
  productName: string;
  price: number;
};

type Inventory = {
  stock: number;
  warehouse: boolean;
};

type ProductInventory = Products & Inventory;

let laptop: ProductInventory = {
  productId: 101,
  productName: "Lenovo Loq",
  price: 98000,
  stock: 120,
  warehouse: true,
};

let Desktop: ProductInventory = {
  productId: 102,
  productName: "Acer Nitro",
  price: 101000,
  stock: 112,
  warehouse: false,
};

// Class + Constructor Practice

class Student {
  constructor(name: string, age: number, coruse: string) {}
}

let std1 = new Student("Aman Singh", 24, "MCA");
let std2 = new Student("Sweety Sharma", 23, "MCom");

//Class for a Product

class Product {
  constructor(id: number, name: string, price: number, inStock: boolean) {}
}

let p1 = new Product(101, "Dish tv", 1200, true);
let p2 = new Product(102, "Phone", 100, false);
let p3 = new Product(103, "Laptop", 12000, true);

//Class + Constructor Challenge

class BankAccount {
  constructor(accountNumber: number, holderName: string, balance: number) {}
}

let b1 = new BankAccount(585926002825, "Aman Singh", 12000);
let b2 = new BankAccount(585926002826, "Sweety Gupta", 18000);

//Final Challenge

class Cars {
  constructor(brand: string, model: string, year: number, price: number) {}
}

let c1 = new Cars("MG", "electric", 2025, 1209999);
let c2 = new Cars("BMW", "M5 Competition", 2025, 9999999999);
let c3 = new Cars("Tesla", "electric", 2025, 99);

// this and access modifier

class Students {
  name;
  age;
  course;
  constructor(name: string, age: number, course: string) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
}

let std101 = new Students("AMan", 24, "mca");
let std102 = new Students("Sonali", 16, "Phd");

//public

class Productss {
  public name;
  public price;
  public inStock;
  constructor(naam: string, kimat: number, samaanHai: boolean) {
    this.name = naam;
    this.price = kimat;
    this.inStock = samaanHai;
  }
}

let ptd1 = new Productss("Lappy", 2500, true);
ptd1.name;
ptd1.price;
ptd1.inStock;

//private

class BankAccounts {
  private accountNumber;
  public holderName;
  private balance;
  constructor(accountNumber: number, holderName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
  }
}

let bankAcc = new BankAccounts(595826002825, "Sweety Sharma", 120000000);
bankAcc.holderName;
bankAcc.accountNumber;
bankAcc.balance;

//protected

class Animal {
  protected name;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  changeName() {
    this.name = "Aman";
  }
}

let d1 = new Dog("Sweety");
d1.name;

//Mixed challenge

class Userss {
  private id;
  public name;
  public email;
  private password;
  protected role;
  constructor(
    id: number,
    name: string,
    email: string,
    password: string,
    role: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}

class Admin extends Userss {
  accessRole() {
    this.role = "Admin Ka Father";
  }
}

let aDmin = new Admin(
  101,
  "Aman",
  "amansingh36645@gmail.com",
  "hds7f3",
  "Admin God",
);

aDmin.id;
aDmin.email;
aDmin.name;
aDmin.role;
aDmin.password;

// Readonly Property

class Std {
  public readonly id;
  public name;
  public course;
  constructor(name: string, id: number, course: string) {
    this.id = id;
    this.name = name;
    this.course = course;
  }
}

let s1 = new Std("aman", 101, "MCA");
s1.name = "Sweety";
s1.id = 102;

// Parameter Properties

class Prdct {
  constructor(
    public name: string,
    private price: number,
    public readonly category: string,
  ) {}
}

let pdt1 = new Prdct("laptop", 2499, "gaming");
let pdt2 = new Prdct("macbook", 1499, "office");

//Getter and Setter

class BnkAcc {
  constructor(private _balance: number) {}

  get balance() {
    return this._balance;
  }

  set balance(value: number) {
    if (value <= 0) return;
    this._balance = value;
  }
}

let ba1 = new BnkAcc(2800);
ba1.balance;
ba1.balance = 2900;
ba1.balance = -111;

//getter + setter
class Userr {
  constructor(private _password: string) {}
  get password() {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}

let u1 = new Userr("AsPs1957");
u1.password;
u1.password = "ASAP1957";

// Static Member

class Info {
  static namee = "SMS";
  static clgcode = 1597;

  static getCollegeInfo() {
    return (this.namee, this.clgcode);
  }
}

Info.namee;
Info.clgcode;
Info.getCollegeInfo();

//Final Challenge

class Prdcct {
  public readonly id;
  static totalProduct = 0;
  constructor(
    public name: string,
    private _price: number,
    public category: string,
    id: number,
  ) {
    this.id = id;
    Prdcct.totalProduct += 1;
  }
  get price() {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }
}

let p11 = new Prdcct("Bag", 199, "leather", 101);
let p22 = new Prdcct("Tshirt", 1299, "leather", 102);
let p33 = new Prdcct("jacket", 1599, "leather", 103);

// abstract class and methods

abstract class Animals {
  constructor(public name: string) {}

  abstract makeSound(): string;
}

class Dogs extends Animals {
  makeSound(): string {
    return "meow";
  }
}

let d11 = new Dogs("german");

//Abstract class with normal + abstract method

abstract class Employeee {
  constructor(
    public name: string,
    public salary: number,
  ) {}
  showDetails() {
    return "details func";
  }

  abstract calculateBonus(): number;
}

class Developerr extends Employeee {
  calculateBonus(): number {
    return this.salary * 10;
  }
}

let d101 = new Developerr("aman", 12000);
d101.calculateBonus();

// Abstract method requirement

abstract class vehicle {
  public brand;
  constructor(brand: string) {
    this.brand = brand;
  }
  abstract startEngine(): string;
}

class Carr extends vehicle {
  startEngine(): string {
    return "Broom! Broom! Its a Supraaaaaa";
  }
}

let c101 = new Carr("Toyota");
c101.startEngine();

//Test what abstract means

abstract class Payment {
  abstract pay(): void;
}

class CreditPayment extends Payment {}

let CP1 = new Payment(); //error: cannot create instance of abstract class

//final

abstract class Shape {
  constructor(public name: string) {}
  abstract calculateArea(): number;
  showName() {}
}

class Circle extends Shape {
  constructor(public radius: number) {}
  calculateArea(): number {
    return this.radius * 2;
  }
}

let c1001 = new Circle(12);

class Rectangle extends Shape {
  constructor(
    public width: number,
    public height: number,
  ) {}
  calculateArea(): number {
    return this.width * this.height;
  }
}

let rec101 = new Rectangle(10, 20);

//Basic function

function greetUser(name: string): string {
  return name;
}

greetUser("aman");
greetUser("sonali");

//Multiple parameters

function calculateTotal(price: number, qty: number) {
  let num = price * qty;
  return num;
}

calculateTotal(10, 100);
calculateTotal(12, 12);

// void

function showProduct(name: string, price: number): void {
  console.log(`name: ${name} and price: ${price}`);
}

showProduct("laptop", 1900);

//Optional parameter

function createUser(name: string, age: number, email?: string) {
  console.log(name, age, email);
}

createUser("aman", 24, "amansingh@gmail.com");
createUser("sonali", 16);

//Default parameter

function calculateDiscount(price: number, discount: number = 10) {
  return price - discount;
}

calculateDiscount(100, 20);
calculateDiscount(100);

//Function expression

function multiply(a: number, b: number): number {
  return a * b;
}

multiply(10, 20);

//arrow function

let isAdult = (age: number): boolean => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

isAdult(19);
isAdult(9);

//Rest parameter

function calculateSum(...arg: number[]):number {
  let sum = 0;
  for (let i = 0; i < arg.length; i++) {
    sum = sum + arg[i];
  }

  return sum;
}

calculateSum(10, 20);
calculateSum(10, 20, 30, 40);
calculateSum(5, 15, 25, 35, 45);

//Callback

function processNumber(a:number,cb){
  return cb
}

//Final challenge

function calculateEmployeeSalary(salary:number,bonus:number,tax:number = 100){
  let total = salary + bonus - tax
  return total
}

calculateEmployeeSalary(12000,1000)
calculateEmployeeSalary(12000,1000,500)