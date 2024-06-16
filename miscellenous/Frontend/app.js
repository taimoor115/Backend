//Factory Functions

// function PersonMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk: function () {
//       console.log(this);
//       console.log(`this is ${name}`);
//     },
//   };
//   return person;
// }
// let p1 = PersonMaker("taimoor", 23);
// console.log(p1.talk());
// let p2 = PersonMaker("hussain", 22);
// console.log(p2.talk());

// console.log(p1.talk === p2.talk);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log("This is ", this.name);
// };
// let p1 = new Person("Taimoor", 23);
// console.log(p1.talk());

// console.log(p1.talk === p2.talk);

// class are the syntacical sugar over constructors

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk() {
    console.log(`This is ${this.name}`);
  }
}

const p1 = new Person("Taimoor", 23);
const p2 = new Person("Taimoor", 23);
console.log(p1.talk());

console.log(p1.talk === p2.talk);
