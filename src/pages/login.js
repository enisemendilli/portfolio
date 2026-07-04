// ─── Login Page ─────────────────────────────────────────────────
export function renderLogin() {
  // If already logged in, redirect to admin
  if (localStorage.getItem('portfolio_token')) {
    window.location.hash = '#admin';
    return;
  }

  const page = document.getElementById('page-content');

  page.innerHTML = `
    <section class="login-page">
      <div class="login-card glass-card animate-in">
        <h2 class="login-title">SIGN IN</h2>
        <p class="login-subtitle">Access your creative dashboard</p>

        <form id="login-form" class="login-form">
          <div class="input-group">
            <input
              type="text"
              id="login-username"
              class="login-input"
              placeholder="Username"
              autocomplete="username"
              required
            />
          </div>
          <div class="input-group">
            <input
              type="password"
              id="login-password"
              class="login-input"
              placeholder="Password"
              autocomplete="current-password"
              required
            />
          </div>
          <div id="login-error" class="login-error" hidden></div>
          <button type="submit" id="login-btn" class="login-btn">ENTER</button>
        </form>
      </div>
    </section>
  `;

  setTimeout(() => {
    page.querySelectorAll('.animate-in').forEach((el) => el.classList.add('visible'));
  }, 100);

  // Form submit
  const form = document.getElementById('login-form');
  form.addEventListener('submit', handleLogin);
}

async function handleLogin(e) {
  e.preventDefault();

  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;
  const errorDiv = document.getElementById('login-error');
  const btn = document.getElementById('login-btn');

  errorDiv.hidden = true;
  errorDiv.textContent = '';
  btn.disabled = true;
  btn.textContent = 'SIGNING IN…';

  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || data.error || 'Invalid credentials');
    }

    localStorage.setItem('portfolio_token', data.token);
    window.location.hash = '#admin';
  } catch (err) {
    errorDiv.textContent = err.message;
    errorDiv.hidden = false;

    // Shake animation
    const card = document.querySelector('.login-card');
    card.classList.add('shake');
    setTimeout(() => card.classList.remove('shake'), 600);
  } finally {
    btn.disabled = false;
    btn.textContent = 'ENTER';
  }
}
