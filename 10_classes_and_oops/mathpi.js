const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);
// console.log(Math.PI);
// Math.PI =10
// console.log(Math.PI);//3.141592653589793

// const myNewObject = Object.create(null)

/*
Object.defineProperty(Math, "PI", { //Cannot redefine property: PI
  value: 5.6,
  writable: true,
  enumerable: true,
  configurable: true,
});

In JavaScript, the Math.PI property is a static property. This property is read-only, meaning it cannot be changed.
*/

const city = {
  name: "Jaipur",
  location: "Center",
  Capital: true,

  orderTea: function () {
    console.log("code Fatt Gya");
  },
};

console.log(city);

console.log(Object.getOwnPropertyDescriptor(city)); //city is object not a property so// undefined

console.log(Object.getOwnPropertyDescriptor(city, "name"));

Object.defineProperty(city, "name", {
  // aeise hi hm object ki dusri propery ko define kr skte hai jaise location,capital
  writable: false,
  enumerable: true, //iterable ko true kiya tabhi niche loop ke ander name property aayi false hoga to nhi aayegi
});

Object.defineProperty(city, "location", {
  writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(city, "name"));

// for (let [key,value] of city) {  error object is not iterable

for (let [key, value] of Object.entries(city)) {
  if (typeof value != "function") {
    console.log(`${key} : ${value}`);
  }
}
