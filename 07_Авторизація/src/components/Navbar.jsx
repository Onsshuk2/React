import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { authenticated } = useContext(AuthContext);

  return (
    <nav>
      {authenticated ? (
        <>
          <Link to="/users">Users</Link>
          <Link to="/roles">Roles</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default Navbar;
