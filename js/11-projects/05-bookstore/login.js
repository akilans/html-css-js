// Check login
function check_login(e) {
  e.preventDefault();
  let user_name = document.getElementById("user_name").value;
  let password = document.getElementById("password").value;
  let login_error = document.getElementById("login_error");
  login_error.innerHTML = "";

  user_exists = check_user_exists(user_name);

  if (user_exists) {
    console.log("User exists");
    console.log(user_exists);

    let actual_password = user_exists.password;
    if (password == actual_password) {
      console.log("Login success");
      localStorage.setItem("active_user", JSON.stringify(user_exists));
      window.location.href = "index.html";
    } else {
      login_error.innerHTML = "login failed";
      console.log("login failed");
    }
  } else {
    login_error.innerHTML = "User not found";
    console.log("User not found");
  }
}

// Check user exists
function check_user_exists(user_name) {
  let users = JSON.parse(localStorage.getItem("users"));
  let user_found = false;
  users.forEach((user) => {
    if (user.user_name == user_name) {
      console.log(user.user_name);
      user_found = user;
    }
  });
  return user_found;
}

// Add dummy users

function add_users() {
  users = [
    {
      id: 1,
      user_name: "akilan",
      password: "akilan123",
      email: "akil.dove@gmail.com",
    },
  ];

  new_user = {
    id: 2,
    user_name: "inba",
    password: "inba123",
    email: "inba@gmail.com",
  };

  users.push(new_user);

  localStorage.setItem("users", JSON.stringify(users));
}

let form_element = document.getElementById("login_form");

form_element.addEventListener("submit", check_login);
