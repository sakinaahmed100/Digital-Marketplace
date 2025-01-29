import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

interface NavbarProps {
  isAuthenticated: boolean;
  role?: string;
}

const Navbar: React.FC<NavbarProps> = ({ isAuthenticated, role }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyApp</div>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.link}>Home</Link>
        {!isAuthenticated ? (
          <>
            <Link to="/login" className={styles.link}>Login</Link>
            <Link to="/signup" className={styles.link}>Signup</Link>
          </>
        ) : (
          <>
            {role === "admin" && <Link to="/admin/dashboard" className={styles.link}>Admin Dashboard</Link>}
            {role === "customer" && <Link to="/customer/dashboard" className={styles.link}>Customer Dashboard</Link>}
            <button className={styles.logout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
