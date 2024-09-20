const express = require('express');
const app = express();
const mysql = require('mysql');

// MySQL database connection settings
const dbHost = 'localhost';
const dbUser = 'root';
const dbPassword = 'arushi';
const dbName = 'users';

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName
});

// API endpoint to handle signup requests
// Create a route handler for the /signup route
app.post('/signup', (req, res) => {
    // Get the form data from the request body
    const { username, password } = req.body;
  
    // Insert the user data into your MySQL database
    db.query(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error signing up');
      } else {
        res.send('Signed up successfully!');
      }
    });
  });

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});