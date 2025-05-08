import React from "react";
import { Routes, Route, NavLink, Navigate, Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import "./index.scss";

// Page Components
const Home = () => <h2>Welcome to Website A</h2>;
const About = () => <h2>About Us</h2>;
const Contact = () => <h2>Contact Page</h2>;
const Users = () => <h2>Users List</h2>;
const NotFound = () => <h2>404 - Page Not Found</h2>;

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return children;
};

const NavBar = () => (
  <nav className="navbar">
    <NavLink to="/" className="nav-link">
      Home
    </NavLink>
    <NavLink to="/about" className="nav-link">
      About
    </NavLink>
    <NavLink to="/work" className="nav-link">
      Work
    </NavLink>
  </nav>
);

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
