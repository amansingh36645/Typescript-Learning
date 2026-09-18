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
    constructor(accountNumber, holderName, balance) {
    }
}
let b1 = new BankAccount(585926002825, "Aman Singh", 12000);
let b2 = new BankAccount(585926002826, "Sweety Gupta", 18000);
//Final Challenge
class Cars {
    constructor(brand, model, year, price) {
    }
}
let c1 = new Cars("MG", "electric", 2025, 1209999);
let c2 = new Cars("BMW", "M5 Competition", 2025, 9999999999);
let c3 = new Cars("Tesla", "electric", 2025, 99);
//# sourceMappingURL=App.js.map