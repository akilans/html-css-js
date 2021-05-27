let akilan = {
  name: "Akilan",
  age: 34,
  fullDetails: function () {
    return "My name is " + this.name + " I am " + this.age + " Years old";
  },
  sayHello: () => {
    return "Hello from Akilan";
  },
  sayHelloAfter1Sec() {
    // setTimeout(() => console.log(`Hello from ${this.name}`), 1000);
    setTimeout(function () {
      console.log(`Hello from ${this.name}`); // Hello from undefined. Arrow fun solves this issue
    }, 1000);
  },
};

console.log(akilan.name);
console.log(akilan["name"]);
console.log(akilan.fullDetails());
console.log(akilan.sayHello());
console.log(akilan.sayHelloAfter1Sec());
let inba = akilan.fullDetails;
let iniya = akilan.fullDetails.bind(akilan); // bind this to akilan
console.log(inba()); // My name is undefined I am undefined Years old
console.log(iniya()); // My name is Akilan I am 34 Years old
