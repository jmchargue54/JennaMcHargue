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

// 404 handler
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// Global error handler
app.use((err, req, res, next) => {
    // Determine status and template
    const status = err.status || 500;
    const template = status === 404 ? '404' : '500';

    // Only log non-404 errors for debugging purposes
    if (status !== 404) {
        // Log error details for debugging
        console.error('Error occurred:', err.message);
        console.error('Stack trace:', err.stack);
    }

    // Prepare data for the template
    const context = {
        title: status === 404 ? 'Page Not Found' : 'Server Error',
        error: err.message,
        // stack: err.stack
        page: null
    };

    // Render the appropriate error template
    res.status(status).render(`errors/${template}`, context);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
