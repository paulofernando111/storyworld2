// Funções auxiliares
function getUsers() {
  return JSON.parse(localStorage.getItem("sw_users") || "[]");
}

function saveUsers(users) {
  localStorage.setItem("sw_users", JSON.stringify(users));
}

function setCurrentUser(user) {
  localStorage.setItem("sw_user", JSON.stringify(user));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("sw_user") || "null");
}

// Quando já está logado → vai direto para catálogo
if (getCurrentUser()) {
  window.location.href = "catalog.html";
}

document.getElementById("auth-form").addEventListener("submit", function (e) {
  e.preventDefault();
  loginUser();
});

document.getElementById("registerBtn").addEventListener("click", function () {
  registerUser();
});

function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const users = getUsers();

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    setCurrentUser(user);
    window.location.href = "catalog.html";
  } else {
    showError("E-mail ou senha incorretos.");
  }
}

function registerUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let users = getUsers();

  if (users.find(u => u.email === email)) {
    showError("E-mail já cadastrado.");
    return;
  }

  const newUser = {
    email,
    password,
    username: email.split("@")[0],
    bio: "",
    photo: "",
    cover: ""
  };

  users.push(newUser);
  saveUsers(users);
  setCurrentUser(newUser);
  window.location.href = "catalog.html";
}

function showError(message) {
  document.getElementById("error-message").textContent = message;
}
