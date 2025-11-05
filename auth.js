// ✅ auth.js

// Obter usuário atual
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("sw_user") || "null");
}

// Fazer logout
function logoutUser() {
  localStorage.removeItem("sw_user");
  window.location.href = "login.html";
}

// Renderizar botão de conta/perfil no menu
function renderAccountArea() {
  const container = document.getElementById("nav-account");
  if (!container) return;

  const user = getCurrentUser();

  if (!user) {
    container.innerHTML = `<a href="login.html" class="btn small">Entrar</a>`;
    return;
  }

  const userPhoto = user.photo || "https://via.placeholder.com/40";

  container.innerHTML = `
    <div class="profile-menu">
      <img src="${userPhoto}" class="nav-avatar">
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
