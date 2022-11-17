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
let addBrother = (newBrother) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (error) {
        reject("Something went wrong");
      } else {
        brothers.push(newBrother);
        resolve();
      }
    }, 2000);
  });
};

let addAndShow = async () => {
  console.log("Coming here");
  await addBrother({ name: "Akilan", place: "Bangalore" }); // wait for the promise
  getBrothers();
  console.log("ends here");
};

addAndShow();
