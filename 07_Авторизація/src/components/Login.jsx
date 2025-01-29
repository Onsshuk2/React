import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory -> useNavigate

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Для навігації після успішного входу

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка авторизації
    // Якщо успішно, редірект на головну
    navigate('/'); // Оновлення useHistory на useNavigate
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
