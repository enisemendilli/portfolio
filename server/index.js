import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure directories exist
const uploadsDir = path.join(__dirname, 'uploads');
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

// Multer config for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp|svg/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    if (ext && mime) return cb(null, true);
    cb(new Error('Only image files are allowed'));
  },
});

// Data helpers
const DATA_FILE = path.join(dataDir, 'projects.json');

function readData() {
  if (!fs.existsSync(DATA_FILE)) {
    const initial = { projects: [], photos: [] };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2));
    return initial;
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Auth — hardcoded credentials
const AUTH_USER = 'tearnfears';
const AUTH_PASS = 'portfolio332';
const tokens = new Set();

function generateToken() {
  const token = uuidv4();
  tokens.add(token);
  return token;
}

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token || !tokens.has(token)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// ── Auth Routes ──
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === AUTH_USER && password === AUTH_PASS) {
    const token = generateToken();
    return res.json({ token, message: 'Login successful' });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/api/logout', authMiddleware, (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  tokens.delete(token);
  res.json({ message: 'Logged out' });
});

app.get('/api/auth/check', authMiddleware, (req, res) => {
  res.json({ authenticated: true });
});

// ── Upload Route ──
app.post('/api/upload', authMiddleware, upload.array('images', 20), (req, res) => {
  const files = req.files.map((f) => `/uploads/${f.filename}`);
  res.json({ files });
});

// ── Project Routes ──
app.get('/api/projects', (req, res) => {
  const data = readData();
  res.json(data.projects);
});

app.get('/api/projects/:id', (req, res) => {
  const data = readData();
  const project = data.projects.find((p) => p.id === req.params.id);
  if (!project) return res.status(404).json({ error: 'Not found' });
  res.json(project);
});

app.post('/api/projects', authMiddleware, (req, res) => {
  const data = readData();
  const project = {
    id: uuidv4(),
    title: req.body.title || 'Untitled',
    category: req.body.category || 'branding',
    description: req.body.description || '',
    images: req.body.images || [],
    year: req.body.year || new Date().getFullYear().toString(),
    featured: req.body.featured || false,
    createdAt: new Date().toISOString(),
  };
  data.projects.unshift(project);
  writeData(data);
  res.status(201).json(project);
});

app.put('/api/projects/:id', authMiddleware, (req, res) => {
  const data = readData();
  const index = data.projects.findIndex((p) => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  data.projects[index] = { ...data.projects[index], ...req.body, id: req.params.id };
  writeData(data);
  res.json(data.projects[index]);
});

app.delete('/api/projects/:id', authMiddleware, (req, res) => {
  const data = readData();
  // Optionally delete associated images
  const project = data.projects.find((p) => p.id === req.params.id);
  if (project) {
    project.images.forEach((img) => {
      const filePath = path.join(__dirname, img);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    });
  }
  data.projects = data.projects.filter((p) => p.id !== req.params.id);
  writeData(data);
  res.json({ message: 'Deleted' });
});

// ── Photo Routes (Through My Eyes) ──
app.get('/api/photos', (req, res) => {
  const data = readData();
  res.json(data.photos);
});

app.post('/api/photos', authMiddleware, (req, res) => {
  const data = readData();
  const photo = {
    id: uuidv4(),
    src: req.body.src || '',
    caption: req.body.caption || '',
    createdAt: new Date().toISOString(),
  };
  data.photos.unshift(photo);
  writeData(data);
  res.status(201).json(photo);
});

app.delete('/api/photos/:id', authMiddleware, (req, res) => {
  const data = readData();
  const photo = data.photos.find((p) => p.id === req.params.id);
  if (photo && photo.src) {
    const filePath = path.join(__dirname, photo.src);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }
  data.photos = data.photos.filter((p) => p.id !== req.params.id);
  writeData(data);
  res.json({ message: 'Deleted' });
});

app.listen(PORT, () => {
  console.log(`✦ Portfolio API running on http://localhost:${PORT}`);
});
