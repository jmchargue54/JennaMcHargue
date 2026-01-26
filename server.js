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
    res.render('index'); // no .ejs extension
});

app.get('/resume', (req, res) => {
    res.render('resume');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
