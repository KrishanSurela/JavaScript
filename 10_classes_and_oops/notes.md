# Javascript and Classes

## Does Javascript really have classes ?

### Yes,Javascript does have classes. This feature was introduced with the ECMAScript 2015. However ,it's important to note that Javascript primarily a prototype-based language, and its classes are primarily syntactic sugar over exiting protype-bases inheritence mechanisms. In other words, it provides a more familiar syntax for developers coming from class-based langueses suc as java or C++.

## OOP (Object Oriented Programming)

### Object

- Collection of properties and methods

- toLowerCase() ,Promises also object

### Why we use OOP ?

### important

## PARTS OF OOP

Object literal

- Constructor function
- Prototypes
- Classes
- instances (new,this)

## 4 pillar

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

## 1. Abstraction

### An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.

- Point to remember

* We can not create an instance of Abstract Class
* It reduces the duplication of code.

## 2. Encapsulation

### The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it.

### Point to remember =>

- Use var keyword to make data members private
- Use setter methods to set the data and getter methods to get the data

* The encapsulation allows us to handle an object using the following properties: =>

- Read/Write - Here, we use setter methods to write the data and getter methods read that data.

- Read Only - In this case, we use getter methods only.

- Write Only - In this case, we use setter methods only.

## 3. Inheritance

## The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes. It provides flexibility to the child class to reuse the methods and variables of a parent class.

## The JavaScript extends keyword is used to create a child class on the basis of a parent class. It facilitates child class to acquire all the properties and behavior of its parent class.

### Points to remember

- It maintains an IS-A relationship.
- The extends keyword is used in class expressions or class declarations.
- Using extends keyword, we can acquire all the properties and behavior of the inbuilt object as well as custom classes.
- We can also use a prototype-based approach to achieve inheritance

#### In this example, we declare sub-class that extends the properties of its parent class.

```javascript
class Bike {
  constructor() {
    this.company = "Honda";
  }
}
class Vehicle extends Bike {
  constructor(name, price) {
    super();
    this.name = name;
    this.price = price;
  }
}
var v = new Vehicle("Shine", "70000");
document.writeln(v.company + " " + v.name + " " + v.price);
```

#### In this example, we extends Date object to display today's date.

```javascript
class Moment extends Date {
  constructor() {
    super();
  }
}
var m = new Moment();
document.writeln("Current date:");
document.writeln(
  m.getDate() + "-" + (m.getMonth() + 1) + "-" + m.getFullYear()
);
```

#### Here, we perform prototype-based inheritance. In this approach, there is no need to use class and extends keywords.

```javascript
//Constructor function
function Bike(company) {
  this.company = company;
}

Bike.prototype.getCompany = function () {
  return this.company;
};
//Another constructor function
function Vehicle(name, price) {
  this.name = name;
  this.price = price;
}
var bike = new Bike("Honda");
Vehicle.prototype = bike; //Now Bike treats as a parent of Vehicle.
var vehicle = new Vehicle("Shine", 70000);
document.writeln(
  vehicle.getCompany() + " " + vehicle.name + " " + vehicle.price
);
```

## 4. Polymorphism

### The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods.

#### Let's see an example where a child class object invokes the parent class method.

```javascript
class A {
  display() {
    document.writeln("A is invoked");
  }
}
class B extends A {}
var b = new B();
b.display();
```

#### Let's see an example where a child and parent class contains the same method. Here, the object of child class invokes both classes method.

```javascript
class A {
  display() {
    document.writeln("A is invoked<br>");
  }
}
class B extends A {
  display() {
    document.writeln("B is invoked");
  }
}

var a = [new A(), new B()];
a.forEach(function (msg) {
  msg.display();
});
```

#### Let's see the same example with prototype-based approach.

```javascript
function A() {}
A.prototype.display = function () {
  return "A is invoked";
};
function B() {}

B.prototype = Object.create(A.prototype);

var a = [new A(), new B()];

a.forEach(function (msg) {
  document.writeln(msg.display() + "<br>");
});
```
