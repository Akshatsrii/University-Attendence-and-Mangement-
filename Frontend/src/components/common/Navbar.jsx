import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../../assets/logo.png.jpeg";   // ✔ correct path
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-overlay">
      <div className="logo-box">
        <img src={logo} alt="Salok Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li>Student</li>
        <li>Faculty</li>
        <li>Admin</li>
        <li>Research</li>
        <li>Academics</li>
        <li>Admission</li>
      </ul>

      <div className="nav-actions">
        <ThemeToggle />
        <Link to="/login" className="login-btn">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
