import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory -> useNavigate

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Для навігації після реєстрації

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка реєстрації
    // Якщо успішно, редірект на логін
    navigate('/login'); // Оновлення useHistory на useNavigate
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
