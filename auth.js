// auth.js (usamos sw_user)
// simples, seguro e idempotente

(function(){
  function safeParse(v){ try{ return JSON.parse(v); }catch(e){ return null; } }
  function getUser(){ return safeParse(localStorage.getItem('sw_user')); }
  function setUser(u){ localStorage.setItem('sw_user', JSON.stringify(u)); }
  function clearUser(){ localStorage.removeItem('sw_user'); }

  function render(){
    const container = document.getElementById('nav-account');
    if(!container) return;
    const user = getUser();
    if(!user){
      container.innerHTML = `<a class="btn" href="login.html">Entrar</a> <a class="btn" href="register.html" style="margin-left:8px">Cadastrar</a>`;
      return;
    }
    const avatar = user.photo || 'https://via.placeholder.com/40';
    const name = user.username || user.email;
    container.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px">
        <button class="profile-btn" id="profileBtn"><img src="${avatar}" class="nav-avatar"> <span class="muted">${name}</span></button>
      </div>
    `;
    document.getElementById('profileBtn').addEventListener('click', ()=> window.location.href='perfil.html');
  }

  window.auth = { getUser, setUser, clearUser, render };
  document.addEventListener('DOMContentLoaded', ()=> { render(); setTimeout(render,200); setTimeout(render,1200); });
  window.addEventListener('storage', (e)=> { if(e.key==='sw_user') render(); });

})();
