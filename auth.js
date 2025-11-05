// auth.js
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("sw_user") || "null");
}

function logoutUser() {
  localStorage.removeItem("sw_user");
  window.location.href = "login.html";
}

function renderAccountArea() {
  const container = document.getElementById("nav-account");
  if (!container) return;

  const user = getCurrentUser();
  if (!user) {
    container.innerHTML = `<a href="login.html" class="btn small">Entrar</a>`;
    return;
  }

  container.innerHTML = `
    <div class="profile-menu">
      <img src="${user.photo}" class="nav-avatar">
      <span>${user.username}</span>
      <div class="dropdown">
        <a href="perfil.html">Meu Perfil</a>
        <a href="writer.html">Escrever</a>
        <button onclick="logoutUser()">Sair</button>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderAccountArea);
// Após login bem-sucedido:
localStorage.setItem("sw_user", JSON.stringify(found));
window.location.href = "home.html";
