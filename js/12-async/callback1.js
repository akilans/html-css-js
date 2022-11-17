console.log("start");

let login = (username, password, callback) => {
  setTimeout(() => {
    callback({ useremail: username, messsage: "success" });
  }, 2000);
};

let loginData = login("akilan@gmail.com", 1234, (data) => {
  console.log(data);
});

console.log("finish");
