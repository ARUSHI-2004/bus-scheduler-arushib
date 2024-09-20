// Import the required modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Create a new Express app
const app = express();

// Set the port number
const port = 3000;

// Use the body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the React application
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to handle login requests
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Replace this with your actual authentication logic
  if (username === 'admin' && password === 'password') {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid username or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});