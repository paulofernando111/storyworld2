function showTab(tab) {
  document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  if (tab === "login") {
    document.getElementById("loginForm").classList.add("active");
    document.querySelectorAll(".tab")[0].classList.add("active");
  } else {
    document.getElementById("registerForm").classList.add("active");
    document.querySelectorAll(".tab")[1].classList.add("active");
  }
}

function showForgotPassword() {
  document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));
  document.getElementById("forgotForm").classList.add("active");
}

// ✅ Cadastro
document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  const username = regUsername.value;
  const email = regEmail.value;
  const pwd = regPassword.value;
  const confirm = regConfirmPassword.value;

  if (pwd !== confirm) return alert("As senhas não coincidem!");

  let users = JSON.parse(localStorage.getItem("sw_users") || "[]");
  if (users.some(u => u.email === email)) return alert("E-mail já cadastrado!");

  users.push({ username, email, password: pwd });
  localStorage.setItem("sw_users", JSON.stringify(users));
  alert("Conta criada com sucesso!");
  showTab("login");
});

// ✅ Login
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;

  let users = JSON.parse(localStorage.getItem("sw_users") || "[]");
  const found = users.find(u => u.email === email && u.password === password);

  if (!found) return alert("Credenciais incorretas!");

  localStorage.setItem("sw_user", JSON.stringify(found));
  window.location.href = "home.html";
});
