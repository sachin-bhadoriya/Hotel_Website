import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Styles from '../CSSFile/navbar.module.css';

function usePageViews() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
}

const Navbar = () => {
  usePageViews();
  const location = useLocation(); 

  return (
    <nav className={`bg-dark text-white p-3 text-center ${Styles.navbar}`}>
      <Link
        className={`p-3 ${Styles.linkstext} ${
          location.pathname === '/' ? 'text-warning text-decoration-underline' : 'text-white'
        }`}
        to="/"
      >
        <span>Home</span>
      </Link>

      <Link
        className={`p-3 ${Styles.linkstext} ${
          location.pathname === '/about' ? 'text-warning text-decoration-underline' : 'text-white'
        }`}
        to="/about"
      >
        <span>About</span>
      </Link>

      <Link
        className={`p-3 ${Styles.linkstext} ${
          location.pathname === '/service' ? 'text-warning text-decoration-underline' : 'text-white'
        }`}
        to="/service"
      >
        <span>Service</span>
      </Link>

      <Link
        className={`p-3 ${Styles.linkstext} ${
          location.pathname === '/all-notes' ? 'text-warning text-decoration-underline' : 'text-white'
        }`}
        to="/all-notes"
      >
        <span>All Notes</span>
      </Link>
    </nav>
  );
};

export default Navbar;
