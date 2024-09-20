import React from 'react';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => (
  <div className="login-page">
    <h1>Login</h1>
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Username" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
);

export default LoginPage;
