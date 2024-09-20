import React from 'react';
import './SignUpPage.css'; // Import the CSS file for styling

const SignUpPage = () => (
  <div className="SignUp-page">
    <h1>SignUp</h1>
    <form className="SignUp-form">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Username" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Password" required />
      </div>
      <button type="submit">SignUp</button>
    </form>
  </div>
);

export default SignUpPage;