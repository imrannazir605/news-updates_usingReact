import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "#1976d2",
        padding: "15px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>NewsApp</h2>
      <div>
        <Link to="/" style={{ color: "#fff", margin: "0 10px" }}>
          Home
        </Link>
        <button
          onClick={handleLogout}
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
