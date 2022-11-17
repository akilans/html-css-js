let brothers = [
  { name: "Ilakiyan", place: "AVR" },
  { name: "Saravanan", place: "AVR" },
];

// calling after 1 second
let getBrothers = () => {
  setTimeout(() => {
    let brothersList = "";
    brothers.forEach((brother) => {
      brothersList += `<li>${brother.name} lives in ${brother.place}</li>`;
    });
    document.body.innerHTML = `<ul>${brothersList}</ul>`;
  }, 1000);
};

//calling after 2 seconds
let addBrother = (newBrother, callback) => {
  setTimeout(() => {
    brothers.push(newBrother);
    callback();
  }, 2000);
};

//getBrothers();
addBrother({ name: "Akilan", place: "Bangalore" }, getBrothers);
console.log(brothers);
