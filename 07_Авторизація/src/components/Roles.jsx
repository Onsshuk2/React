import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Roles = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState('');

  useEffect(() => {
    const fetchRoles = async () => {
      const response = await axios.get('/api/roles');
      setRoles(response.data);
    };
    fetchRoles();
  }, []);

  const handleDelete = async (roleId) => {
    await axios.delete(`/api/roles/${roleId}`);
    setRoles(roles.filter(role => role.id !== roleId));
  };

  const handleAddRole = async () => {
    await axios.post('/api/roles', { name: newRole });
    setNewRole('');
    setRoles([...roles, { name: newRole }]); // Додаємо нову роль в список
  };

  return (
    <div>
      <h2>Roles</h2>
      <input 
        type="text" 
        value={newRole} 
        onChange={(e) => setNewRole(e.target.value)} 
        placeholder="New Role" 
      />
      <button onClick={handleAddRole}>Add Role</button>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            {role.name}
            <button onClick={() => handleDelete(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roles;
