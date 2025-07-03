import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@vts.com' && password === 'vts123') {
      navigate('/overview');
    } else {
      setError('Invalid Email or Password!');
    }
  };

  return (
    <div className="login-bg">
      <form className="login-form" onSubmit={handleLogin}>
        <h3>Login</h3>
        {error && <div className="error-msg">{error}</div>}

        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your Email Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
