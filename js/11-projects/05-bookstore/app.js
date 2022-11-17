// Check whether user logged in or not
function check_user_loggedin() {
  active_user = JSON.parse(localStorage.getItem("active_user"));
  if (!active_user) {
    window.location.href = "login.html";
  } else {
    document.getElementById("greet_message").innerHTML =
      "Welcome, " + active_user.user_name;
  }
}

// logout function
function logout() {
  localStorage.removeItem("active_user");
  window.location.href = "login.html";
}
