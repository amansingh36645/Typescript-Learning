# TypeScript Learning Journey 🚀

This repository contains my TypeScript learning journey, practice code, and hands-on exercises.

I'm learning TypeScript step by step by studying concepts and implementing them through small coding exercises.

## 📚 Topics Learned

### 1. Basic Types

* String
* Number
* Boolean
* Arrays
* Type inference
* Type annotations

Example:

```ts
let username = "Aman"; // Type inference

let age: number = 24; // Type annotation
let isStudent: boolean = true;
```

---

### 2. Interfaces

Learned how to define the structure/shape of objects using interfaces.

```ts
interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}
```

Using an interface:

```ts
let student: Student = {
  id: 1,
  name: "Aman",
  age: 24,
  course: "MCA",
  isActive: true
};
```

---

### 3. Interface Extension

Learned how one interface can extend another interface.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
}
```

`Admin` automatically receives the properties of `User` and can add its own properties.

---

### 4. Type Aliases

Learned how to create reusable type aliases.

```ts
type ProductId = number;
type ProductName = string;
type Price = number;
```

Using aliases inside an interface:

```ts
interface Product {
  id: ProductId;
  name: ProductName;
  price: Price;
  inStock: boolean;
}
```

---

### 5. Union Types

Learned how a variable can accept more than one type.

```ts
let userId: number | string;

userId = 101;
userId = "101";
```

---

### 6. Literal Types

Learned how to restrict a value to specific allowed values.

```ts
let status: "loading" | "success" | "error";

status = "loading";
status = "success";
```

Values outside the defined options produce a TypeScript error.

---

### 7. Intersection Types

Learned how to combine multiple types into one type using `&`.

```ts
type Employee = {
  id: number;
  name: string;
};

type Developer = {
  language: string;
  experience: number;
};

type DeveloperEmployee = Employee & Developer;
```

The resulting type contains properties from both `Employee` and `Developer`.

---

# 🏗️ Classes & Object-Oriented TypeScript

### 8. Classes & Constructors

Learned the basics of creating classes and constructors.

```ts
class Student {
  constructor(
    public name: string,
    public age: number,
    public course: string
  ) {}
}

let student = new Student("Aman", 24, "MCA");
```

---

### 9. `this` Keyword

Learned how `this` refers to the current object inside a class.

```ts
class Student {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

---

### 10. Access Modifiers

Learned:

* `public`
* `private`
* `protected`

#### Public

Accessible from anywhere.

```ts
class Product {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

#### Private

Accessible only inside the class.

```ts
class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }
}
```

#### Protected

Accessible inside the class and its subclasses.

```ts
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  changeName() {
    this.name = "Dog";
  }
}
```

---

### 11. Readonly Properties

Learned how to make a property immutable after initialization.

```ts
class Student {
  public readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
```

The `id` cannot be reassigned after initialization.

---

### 12. Parameter Properties

Learned how TypeScript can automatically create and initialize class properties through constructor parameters.

```ts
class Product {
  constructor(
    public name: string,
    private price: number,
    public readonly category: string
  ) {}
}
```

This avoids manually declaring and assigning the properties.

---

### 13. Getters & Setters

Learned how to control access to private properties using getters and setters.

```ts
class BankAccount {
  constructor(private _balance: number) {}

  get balance() {
    return this._balance;
  }

  set balance(value: number) {
    if (value > 0) {
      this._balance = value;
    }
  }
}
```

This allows controlled access and validation.

---

### 14. Static Members

Learned about properties and methods that belong to the class itself rather than individual objects.

```ts
class Product {
  static totalProducts = 0;

  constructor() {
    Product.totalProducts++;
  }
}
```

Accessing a static member:

```ts
Product.totalProducts;
```

---

### 15. Abstract Classes

Learned how to create abstract base classes that cannot be instantiated directly.

```ts
abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): string;
}
```

A child class must implement the abstract method:

```ts
class Dog extends Animal {
  makeSound(): string {
    return "Woof";
  }
}
```

---

### 16. Abstract Methods

Learned that an abstract method defines a requirement for subclasses.

```ts
abstract calculateBonus(): number;
```

The child class must provide its implementation.

---

# 🔧 TypeScript Functions

### 17. Function Parameters & Return Types

```ts
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
```

---

### 18. `void`

Learned how to define functions that don't return a value.

```ts
function showProduct(name: string, price: number): void {
  console.log(name, price);
}
```

---

### 19. Optional Parameters

```ts
function createUser(
  name: string,
  age: number,
  email?: string
) {}
```

The `email` parameter is optional.

---

### 20. Default Parameters

```ts
function calculateDiscount(
  price: number,
  discount: number = 10
) {
  return price - discount;
}
```

---

### 21. Arrow Functions

```ts
const isAdult = (age: number): boolean => {
  return age >= 18;
};
```

---

### 22. Rest Parameters

Learned how to accept an arbitrary number of arguments.

```ts
function calculateSum(...numbers: number[]): number {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }

  return sum;
}
```

---

### 23. Callback Functions

Learned that functions can be passed as arguments to other functions.

```ts
function processNumber(
  value: number,
  callback: (value: number) => number
) {
  return callback(value);
}
```

---

# 🧩 Generics

### 24. Generic Functions

Learned how to create reusable functions that work with different types.

```ts
function getValue<T>(value: T): T {
  return value;
}
```

The same function can work with:

```ts
getValue("Aman");
getValue(24);
getValue(true);
```

---

### 25. Multiple Generic Types

Learned how to use multiple generic type parameters.

```ts
function makePair<T, U>(first: T, second: U) {
  return {
    first,
    second
  };
}
```

Example:

```ts
makePair("Aman", 24);
makePair(24, true);
```

---

### 26. Generic Interfaces

Learned how interfaces can accept a generic type.

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
```

This allows the same interface to represent different data types:

```ts
ApiResponse<string>
ApiResponse<number>
ApiResponse<User>
```

---

### 27. Generic Classes

Learned how classes can work with different types using generics.

```ts
class Storage<T> {
  constructor(private value: T) {}

  getValue(): T {
    return this.value;
  }
}
```

Examples:

```ts
const stringStorage = new Storage("Aman");
const numberStorage = new Storage(24);
const booleanStorage = new Storage(true);
```

---

## 🧪 Practice Approach

For each topic, I practice by:

1. Learning the concept
2. Writing small examples
3. Solving coding exercises
4. Reviewing mistakes
5. Combining new concepts with previously learned concepts

---

## 🎯 Current Goal

My goal is to build a strong TypeScript foundation before moving deeper into:

* Advanced TypeScript
* React + TypeScript
* Node.js + TypeScript
* Backend development
* Full-stack development

This repository will continue to grow as I learn and practice more TypeScript concepts.

---

## 📈 Progress

* [x] Basic Types
* [x] Type Inference
* [x] Type Annotations
* [x] Interfaces
* [x] Interface Extension
* [x] Type Aliases
* [x] Union Types
* [x] Literal Types
* [x] Intersection Types
* [x] Classes
* [x] Constructors
* [x] `this`
* [x] Access Modifiers
* [x] `readonly`
* [x] Parameter Properties
* [x] Getters & Setters
* [x] Static Members
* [x] Abstract Classes
* [x] Abstract Methods
* [x] Functions
* [x] Optional Parameters
* [x] Default Parameters
* [x] Arrow Functions
* [x] Rest Parameters
* [x] Callback Functions
* [x] Generic Functions
* [x] Generic Interfaces
* [x] Generic Classes
* [ ] Advanced Generics
* [ ] Utility Types
* [ ] Type Narrowing
* [ ] Type Guards
* [ ] `keyof` / `typeof`
* [ ] Conditional Types
* [ ] Mapped Types
* [ ] Advanced TypeScript Patterns

---

**Status:** 🚀 Actively Learning TypeScript
