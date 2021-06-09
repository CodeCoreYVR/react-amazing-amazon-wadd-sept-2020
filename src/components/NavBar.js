import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav
      style={{
        padding: '10px',
        display: 'flex'
      }}>
      <Link style={{ marginRight: '20px' }} to="/">
        Home
      </Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

export default NavBar ;