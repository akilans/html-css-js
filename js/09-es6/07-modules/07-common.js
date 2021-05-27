export default class Akilan {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    return "Hello " + this.name;
  }
}

export let sayGoodBye = () => "GoodBye";

export let sayHelloWorld = () => "Hello world";
