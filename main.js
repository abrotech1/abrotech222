const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Welcome Page Route (https://domain.com/)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'welcome-home.html'));
});

// API Home Page Route (https://domain.com/api)
app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'api-home.html'));
});

// API Docs Route (https://domain.com/api/docs)
app.get('/api/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'api-docs.html'));
});

// About Page Route (https://domain.com/about)
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'about.html'));
});

// Contact Page Route (https://domain.com/contact)
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'contact.html'));
});

// Handle 404 errors (Invalid URLs)
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'view', 'error.html'));
});

// Start the server on the desired port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
