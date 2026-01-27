const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Tell Express to use EJS
app.set('view engine', 'ejs');

// Tell Express where the views folder is
app.set('views', path.join(__dirname, 'src/views'));

app.get('/', (req, res) => {
  res.render('index', { page: 'home' });
});

app.get('/resume', (req, res) => {
  res.render('resume', { page: 'resume' });
});

app.get('/projects', (req, res) => {
  res.render('projects', { page: 'projects' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { page: 'contact' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
