// ─── Admin / Dashboard Page ─────────────────────────────────────

let activeTab = 'projects';
let projects = [];
let photos = [];
let editingProject = null;
let uploadedImages = [];

function getToken() {
  return localStorage.getItem('portfolio_token');
}

function authHeaders(extra = {}) {
  return {
    Authorization: `Bearer ${getToken()}`,
    ...extra,
  };
}

// ─── Entry ──────────────────────────────────────────────────────
export async function renderAdmin() {
  const token = getToken();

  // Auth gate
  if (!token) {
    window.location.hash = '#login';
    return;
  }

  // Optional: verify token
  try {
    const check = await fetch('/api/auth/check', {
      headers: authHeaders(),
    });
    if (!check.ok) throw new Error();
  } catch {
    localStorage.removeItem('portfolio_token');
    window.location.hash = '#login';
    return;
  }

  const page = document.getElementById('page-content');

  page.innerHTML = `
    <section class="admin-page">
      <header class="admin-header">
        <h2 class="heading-lg">DASHBOARD</h2>
        <button class="btn btn-outline" id="logout-btn">LOG OUT</button>
      </header>

      <div class="admin-tabs">
        <button class="tab-btn active" data-tab="projects">Projects</button>
        <button class="tab-btn" data-tab="photos">Photos</button>
      </div>

      <div class="admin-content" id="admin-content"></div>
    </section>
  `;

  // Logout
  document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('portfolio_token');
    window.location.hash = '#home';
  });

  // Tab switching
  const tabs = page.querySelectorAll('.tab-btn');
  tabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabs.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.tab;
      renderTabContent();
    });
  });

  activeTab = 'projects';
  await renderTabContent();
}

// ─── Tab content dispatcher ─────────────────────────────────────
async function renderTabContent() {
  if (activeTab === 'projects') {
    await renderProjectsTab();
  } else {
    await renderPhotosTab();
  }
}

// ═══════════════════════════════════════════════════════════════
//  PROJECTS TAB
// ═══════════════════════════════════════════════════════════════
async function renderProjectsTab() {
  const content = document.getElementById('admin-content');

  content.innerHTML = `
    <div class="admin-section">
      <div class="admin-section-header">
        <h3>Manage Projects</h3>
        <button class="btn btn-primary" id="add-project-btn">+ Add New Project</button>
      </div>

      <div class="project-form-wrapper" id="project-form-wrapper" hidden>
        <form id="project-form" class="admin-form">
          <div class="form-row">
            <div class="input-group">
              <label for="pf-title">Title</label>
              <input type="text" id="pf-title" class="admin-input" placeholder="Project title" required />
            </div>
            <div class="input-group">
              <label for="pf-category">Category</label>
              <select id="pf-category" class="admin-input" required>
                <option value="coffeeshop_branding">Coffee Shop Branding</option>
                <option value="publishing_branding">Publishing House Branding</option>
                <option value="posters">Posters</option>
                <option value="bookcovers">Book Covers</option>
                <option value="social_media">Social Media Designs</option>
                <option value="internet_commerce">Internet Commerce Designs</option>
              </select>
            </div>
            <div class="input-group">
              <label for="pf-year">Year</label>
              <input type="number" id="pf-year" class="admin-input" placeholder="2025" />
            </div>
          </div>

          <div class="input-group">
            <label for="pf-description">Description</label>
            <textarea id="pf-description" class="admin-input admin-textarea" placeholder="Project description…" rows="4"></textarea>
          </div>

          <div class="input-group">
            <label>Images</label>
            <div class="upload-area" id="project-upload-area">
              <p>Drag & drop images here or <strong>click to browse</strong></p>
              <input type="file" id="project-file-input" multiple accept="image/*" hidden />
            </div>
            <div class="upload-previews" id="project-upload-previews"></div>
          </div>

          <div class="input-group">
            <label class="checkbox-label">
              <input type="checkbox" id="pf-featured" />
              Featured project
            </label>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="pf-save-btn">SAVE PROJECT</button>
            <button type="button" class="btn btn-outline" id="pf-cancel-btn">CANCEL</button>
          </div>

          <div id="pf-error" class="form-error" hidden></div>
        </form>
      </div>

      <div class="admin-grid" id="admin-projects-grid">
        <div class="loading-state">Loading…</div>
      </div>
    </div>
  `;

  // Load projects
  await loadProjects();

  // Event listeners
  attachProjectTabEvents();
}

async function loadProjects() {
  try {
    const res = await fetch('/api/projects');
    if (!res.ok) throw new Error();
    projects = await res.json();
  } catch {
    projects = [];
  }
  renderAdminProjectGrid();
}

function renderAdminProjectGrid() {
  const grid = document.getElementById('admin-projects-grid');
  if (!grid) return;

  if (projects.length === 0) {
    grid.innerHTML = '<p class="empty-state-small">No projects yet. Create your first one!</p>';
    return;
  }

  const categoryLabels = {
    coffeeshop_branding: 'Coffee Shop Branding',
    publishing_branding: 'Publishing House Branding',
    posters: 'Posters',
    bookcovers: 'Book Covers',
    social_media: 'Social Media Designs',
    internet_commerce: 'Internet Commerce Designs',
  };

  grid.innerHTML = projects
    .map(
      (p) => `
      <div class="admin-card" data-id="${p.id}">
        <div class="admin-card-thumb">
          ${
            p.images && p.images.length > 0
              ? `<img src="${p.images[0]}" alt="${p.title}" />`
              : `<div class="thumb-placeholder">${p.title.charAt(0)}</div>`
          }
        </div>
        <div class="admin-card-info">
          <h4>${p.title}</h4>
          <span class="card-category-pill small">${categoryLabels[p.category] || p.category}</span>
          <span class="admin-card-year">${p.year || ''}</span>
        </div>
        <div class="admin-card-actions">
          <button class="btn btn-sm btn-outline edit-project-btn" data-id="${p.id}">Edit</button>
          <button class="btn btn-sm btn-danger delete-project-btn" data-id="${p.id}">Delete</button>
        </div>
      </div>
    `
    )
    .join('');
}

function attachProjectTabEvents() {
  const addBtn = document.getElementById('add-project-btn');
  const formWrapper = document.getElementById('project-form-wrapper');
  const form = document.getElementById('project-form');
  const cancelBtn = document.getElementById('pf-cancel-btn');
  const uploadArea = document.getElementById('project-upload-area');
  const fileInput = document.getElementById('project-file-input');
  const grid = document.getElementById('admin-projects-grid');

  // Show form (add mode)
  addBtn.addEventListener('click', () => {
    editingProject = null;
    uploadedImages = [];
    form.reset();
    renderUploadPreviews();
    formWrapper.hidden = false;
    formWrapper.scrollIntoView({ behavior: 'smooth' });
  });

  // Cancel
  cancelBtn.addEventListener('click', () => {
    formWrapper.hidden = true;
    editingProject = null;
    uploadedImages = [];
  });

  // Upload area click
  uploadArea.addEventListener('click', () => fileInput.click());

  // Drag & drop
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
  });
  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
  });
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    if (e.dataTransfer.files.length) uploadFiles(e.dataTransfer.files);
  });

  // File input change
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) uploadFiles(fileInput.files);
    fileInput.value = '';
  });

  // Submit form
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await saveProject();
  });

  // Grid delegation: edit & delete
  grid.addEventListener('click', async (e) => {
    const editBtn = e.target.closest('.edit-project-btn');
    const deleteBtn = e.target.closest('.delete-project-btn');

    if (editBtn) {
      const project = projects.find((p) => String(p.id) === editBtn.dataset.id);
      if (project) openEditProject(project);
    }

    if (deleteBtn) {
      const id = deleteBtn.dataset.id;
      if (confirm('Delete this project? This cannot be undone.')) {
        await deleteProject(id);
      }
    }
  });
}

// ─── Upload images ──────────────────────────────────────────────
async function uploadFiles(files) {
  const formData = new FormData();
  for (const file of files) {
    formData.append('images', file);
  }

  try {
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${getToken()}` },
      body: formData,
    });

    if (!res.ok) throw new Error('Upload failed');

    const data = await res.json();
    uploadedImages.push(...(data.files || []));
    renderUploadPreviews();
  } catch (err) {
    console.error(err);
    alert('Image upload failed. Please try again.');
  }
}

function renderUploadPreviews() {
  const container = document.getElementById('project-upload-previews');
  if (!container) return;

  if (uploadedImages.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = uploadedImages
    .map(
      (src, i) => `
      <div class="upload-thumb" data-index="${i}">
        <img src="${src}" alt="Upload preview" />
        <button type="button" class="upload-thumb-remove" data-index="${i}">×</button>
      </div>
    `
    )
    .join('');

  // Remove buttons
  container.querySelectorAll('.upload-thumb-remove').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.index, 10);
      uploadedImages.splice(idx, 1);
      renderUploadPreviews();
    });
  });
}

// ─── Save project ───────────────────────────────────────────────
async function saveProject() {
  const errorDiv = document.getElementById('pf-error');
  const saveBtn = document.getElementById('pf-save-btn');
  errorDiv.hidden = true;

  const payload = {
    title: document.getElementById('pf-title').value.trim(),
    category: document.getElementById('pf-category').value,
    year: parseInt(document.getElementById('pf-year').value, 10) || null,
    description: document.getElementById('pf-description').value.trim(),
    images: uploadedImages,
    featured: document.getElementById('pf-featured').checked,
  };

  if (!payload.title) {
    errorDiv.textContent = 'Title is required.';
    errorDiv.hidden = false;
    return;
  }

  saveBtn.disabled = true;
  saveBtn.textContent = 'SAVING…';

  try {
    const isEdit = !!editingProject;
    const url = isEdit ? `/api/projects/${editingProject.id}` : '/api/projects';
    const method = isEdit ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: authHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.message || 'Failed to save project');
    }

    // Success — hide form, refresh list
    document.getElementById('project-form-wrapper').hidden = true;
    editingProject = null;
    uploadedImages = [];
    await loadProjects();
  } catch (err) {
    errorDiv.textContent = err.message;
    errorDiv.hidden = false;
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = 'SAVE PROJECT';
  }
}

// ─── Edit project ───────────────────────────────────────────────
function openEditProject(project) {
  editingProject = project;
  uploadedImages = [...(project.images || [])];

  document.getElementById('pf-title').value = project.title || '';
  document.getElementById('pf-category').value = project.category || 'branding';
  document.getElementById('pf-year').value = project.year || '';
  document.getElementById('pf-description').value = project.description || '';
  document.getElementById('pf-featured').checked = !!project.featured;

  renderUploadPreviews();

  const wrapper = document.getElementById('project-form-wrapper');
  wrapper.hidden = false;
  wrapper.scrollIntoView({ behavior: 'smooth' });
}

// ─── Delete project ─────────────────────────────────────────────
async function deleteProject(id) {
  try {
    const res = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
      headers: authHeaders(),
    });
    if (!res.ok) throw new Error();
    await loadProjects();
  } catch {
    alert('Failed to delete project.');
  }
}

// ═══════════════════════════════════════════════════════════════
//  PHOTOS TAB
// ═══════════════════════════════════════════════════════════════
async function renderPhotosTab() {
  const content = document.getElementById('admin-content');

  content.innerHTML = `
    <div class="admin-section">
      <div class="admin-section-header">
        <h3>Manage Photos</h3>
      </div>

      <div class="upload-area" id="photo-upload-area">
        <p>Drag & drop photos here or <strong>click to browse</strong></p>
        <input type="file" id="photo-file-input" multiple accept="image/*" hidden />
      </div>

      <div class="admin-photo-grid" id="admin-photos-grid">
        <div class="loading-state">Loading…</div>
      </div>
    </div>
  `;

  await loadPhotos();
  attachPhotoTabEvents();
}

async function loadPhotos() {
  try {
    const res = await fetch('/api/photos');
    if (!res.ok) throw new Error();
    photos = await res.json();
  } catch {
    photos = [];
  }
  renderAdminPhotoGrid();
}

function renderAdminPhotoGrid() {
  const grid = document.getElementById('admin-photos-grid');
  if (!grid) return;

  if (photos.length === 0) {
    grid.innerHTML = '<p class="empty-state-small">No photos yet. Upload your first one!</p>';
    return;
  }

  grid.innerHTML = photos
    .map(
      (p) => `
      <div class="admin-photo-card" data-id="${p.id}">
        <img src="${p.src}" alt="${p.caption || 'Photo'}" />
        ${p.caption ? `<span class="admin-photo-caption">${p.caption}</span>` : ''}
        <button class="btn btn-sm btn-danger delete-photo-btn" data-id="${p.id}">Delete</button>
      </div>
    `
    )
    .join('');
}

function attachPhotoTabEvents() {
  const uploadArea = document.getElementById('photo-upload-area');
  const fileInput = document.getElementById('photo-file-input');
  const grid = document.getElementById('admin-photos-grid');

  // Upload area click
  uploadArea.addEventListener('click', () => fileInput.click());

  // Drag & drop
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('drag-over');
  });
  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('drag-over');
  });
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('drag-over');
    if (e.dataTransfer.files.length) uploadAndCreatePhotos(e.dataTransfer.files);
  });

  // File input
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) uploadAndCreatePhotos(fileInput.files);
    fileInput.value = '';
  });

  // Delete delegation
  grid.addEventListener('click', async (e) => {
    const btn = e.target.closest('.delete-photo-btn');
    if (!btn) return;

    if (confirm('Delete this photo?')) {
      await deletePhoto(btn.dataset.id);
    }
  });
}

// ─── Upload & create photos ─────────────────────────────────────
async function uploadAndCreatePhotos(files) {
  // 1. Upload files to get URLs
  const formData = new FormData();
  for (const file of files) {
    formData.append('images', file);
  }

  try {
    const uploadRes = await fetch('/api/upload', {
      method: 'POST',
      headers: { Authorization: `Bearer ${getToken()}` },
      body: formData,
    });

    if (!uploadRes.ok) throw new Error('Upload failed');

    const uploadData = await uploadRes.json();
    const filePaths = uploadData.files || [];

    // 2. Create a photo record for each uploaded file
    for (const src of filePaths) {
      await fetch('/api/photos', {
        method: 'POST',
        headers: authHeaders({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ src, caption: '' }),
      });
    }

    // 3. Refresh
    await loadPhotos();
  } catch (err) {
    console.error(err);
    alert('Photo upload failed. Please try again.');
  }
}

// ─── Delete photo ───────────────────────────────────────────────
async function deletePhoto(id) {
  try {
    const res = await fetch(`/api/photos/${id}`, {
      method: 'DELETE',
      headers: authHeaders(),
    });
    if (!res.ok) throw new Error();
    await loadPhotos();
  } catch {
    alert('Failed to delete photo.');
  }
}
