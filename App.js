//Day 1
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
//Day 2
//Level 1
let names = "aman";
names = 23; //error type number is not assignable to string
let aged = 24;
aged = "old"; //error type string is not assignable to number
let isLoggedIn = true;
isLoggedIn = 3.21; //error type number is not assignable to boolean
let name1;
let age1;
let isLoggedIn1;
let user1 = {
    id: 1,
    name: "aman",
    email: "aman@gmail.com",
    isActive: true,
};
let user2 = {
    id: 2,
    name: "sweety",
    email: "sweety@gmail.com",
    isActive: false,
};
let product1 = {
    id: 0o1,
    name: "Laptop",
    price: 58000,
    category: "Electronic",
    inStock: true,
};
let product2 = {
    id: 0o2,
    name: "GPU",
    price: 600000,
    category: "Graphics",
    inStock: true,
};
let product3 = {
    id: 0o3,
    name: "Desktop",
    price: 12000,
    category: "Monitor",
    inStock: false,
};
function productsName(a) {
    return a.name;
}
productsName(product1);
productsName(product2);
productsName(product3);
let admin = {
    role: "All Access",
    permission: ["security", "Survilance", "Modfy"],
    id: 1,
    name: "Admin User",
    email: "admin@gmail.com",
    isActive: true,
};
let carObj = {
    brand: "Toyota",
    model: "Supra",
    year: 2019,
    electric: false,
};
let carObj1 = {
    brand: "BMW",
    model: "M5 Compitition",
    year: 2025,
    electric: false,
};
//Level 5
let UserId;
UserId = 25;
UserId = "Aman";
let Status;
Status = "Pending"; // Throws error: Type '"Pending"' is not assignable to type '"loading" | "success" | "error"'
let DeveloperEmployee = {
    id: 1,
    name: "Aman",
    salary: 3000000,
    language: "TypeScript",
    yoe: 0,
};
let ApplicationStatus;
let UserDetails = {
    id: 101,
    name: "Aman",
    email: "amansingh@gmail.com",
    phone: "99999999999",
};
let laptop = {
    productId: 101,
    productName: "Lenovo Loq",
    price: 98000,
    stock: 120,
    warehouse: true,
};
let Desktop = {
    productId: 102,
    productName: "Acer Nitro",
    price: 101000,
    stock: 112,
    warehouse: false,
};
// Class + Constructor Practice
class Student {
    constructor(name, age, coruse) { }
}
let std1 = new Student("Aman Singh", 24, "MCA");
let std2 = new Student("Sweety Sharma", 23, "MCom");
//Class for a Product
class Product {
    constructor(id, name, price, inStock) { }
}
let p1 = new Product(101, "Dish tv", 1200, true);
let p2 = new Product(102, "Phone", 100, false);
let p3 = new Product(103, "Laptop", 12000, true);
//Class + Constructor Challenge
class BankAccount {
    constructor(accountNumber, holderName, balance) { }
}
let b1 = new BankAccount(585926002825, "Aman Singh", 12000);
let b2 = new BankAccount(585926002826, "Sweety Gupta", 18000);
//Final Challenge
class Cars {
    constructor(brand, model, year, price) { }
}
let c1 = new Cars("MG", "electric", 2025, 1209999);
let c2 = new Cars("BMW", "M5 Competition", 2025, 9999999999);
let c3 = new Cars("Tesla", "electric", 2025, 99);
// this and access modifier
class Students {
    name;
    age;
    course;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}
let std101 = new Students("AMan", 24, "mca");
let std102 = new Students("Sonali", 16, "Phd");
//public
class Productss {
    name;
    price;
    inStock;
    constructor(naam, kimat, samaanHai) {
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
    accountNumber;
    holderName;
    balance;
    constructor(accountNumber, holderName, balance) {
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
    name;
    constructor(name) {
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
    id;
    name;
    email;
    password;
    role;
    constructor(id, name, email, password, role) {
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
let aDmin = new Admin(101, "Aman", "amansingh36645@gmail.com", "hds7f3", "Admin God");
aDmin.id;
aDmin.email;
aDmin.name;
aDmin.role;
aDmin.password;
// Readonly Property
class Std {
    id;
    name;
    course;
    constructor(name, id, course) {
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
    name;
    price;
    category;
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
let pdt1 = new Prdct("laptop", 2499, "gaming");
let pdt2 = new Prdct("macbook", 1499, "office");
//Getter and Setter
class BnkAcc {
    _balance;
    constructor(_balance) {
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            return;
        this._balance = value;
    }
}
let ba1 = new BnkAcc(2800);
ba1.balance;
ba1.balance = 2900;
ba1.balance = -111;
//getter + setter
class Userr {
    _password;
    constructor(_password) {
        this._password = _password;
    }
    get password() {
        return this._password;
    }
    set password(value) {
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
    name;
    _price;
    category;
    id;
    static totalProduct = 0;
    constructor(name, _price, category, id) {
        this.name = name;
        this._price = _price;
        this.category = category;
        this.id = id;
        Prdcct.totalProduct += 1;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}
let p11 = new Prdcct("Bag", 199, "leather", 101);
let p22 = new Prdcct("Tshirt", 1299, "leather", 102);
let p33 = new Prdcct("jacket", 1599, "leather", 103);
// abstract class and methods
class Animals {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Dogs extends Animals {
    makeSound() {
        return "meow";
    }
}
let d11 = new Dogs("german");
//Abstract class with normal + abstract method
class Employeee {
    name;
    salary;
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    showDetails() {
        return "details func";
    }
}
class Developerr extends Employeee {
    calculateBonus() {
        return this.salary * 10;
    }
}
let d101 = new Developerr("aman", 12000);
d101.calculateBonus();
// Abstract method requirement
class vehicle {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
}
class Carr extends vehicle {
    startEngine() {
        return "Broom! Broom! Its a Supraaaaaa";
    }
}
let c101 = new Carr("Toyota");
c101.startEngine();
//Test what abstract means
class Payment {
}
class CreditPayment extends Payment {
}
let CP1 = new Payment(); //error: cannot create instance of abstract class
//final 
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
    showName() {
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return this.radius * 2;
    }
}
let c1001 = new Circle(12);
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
let rec101 = new Rectangle(10, 20);
export {};
//# sourceMappingURL=App.js.map