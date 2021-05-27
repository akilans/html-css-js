// person1 , person2 Not an efficient way
// repeating block of same code again and again

let person1 = {
  name: "Akilan",
  walk: () => "Walking",
};

let person2 = {
  name: "Inba",
  walk: () => "Walking",
};

// Class will solve the issue

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    return "Walking";
  }
}

let person3 = new Person("Iniya");
console.log(person3.name);
console.log(person3.walk());

// Inheritence
class Inba extends Person {
  constructor(name) {
    super(name);
  }

  dance() {
    return "Dancing";
  }
}

let person4 = new Inba("Saron");
console.log(person4.name);
console.log(person4.walk());
console.log(person4.dance());
