import axios from 'axios';

export const getRoles = async () => {
  const response = await axios.get('/api/roles');
  return response.data;
};

export const addRole = async (roleName) => {
  await axios.post('/api/roles', { name: roleName });
};

export const deleteRole = async (roleId) => {
  await axios.delete(`/api/roles/${roleId}`);
};
