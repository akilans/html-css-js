let akilan = {
  name: "Akilan",
  age: 34,
  location: "Bangalore",
};

/* let akilan_name = akilan.name;
let akilan_age = akilan.age
let akilan_location = akilan.location; */

// name and location is reserver variable
let { name: myName, age, location: myLocation } = akilan;
console.log(myName);
console.log(age);
console.log(myLocation);
