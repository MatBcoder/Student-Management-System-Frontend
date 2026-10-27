import { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(sessionStorage.getItem("token"))); // Check if token exists in session storage
    const[role, setRole] = useState(() => sessionStorage.getItem("role")); // Get the role from session storage

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("role");
        setIsAuthenticated(false);
        setRole(null);
        navigate("/login", { replace: true }); // Redirect to login page after logout
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className= "container">
                <NavLink className="navbar-brand" to="/">SMS Portal</NavLink>

                <div className= "navbar-nav">
                    {isAuthenticated && (
                        <>
                            <NavLink to="/" className={({ isActive }) =>isActive ? "nav-link active fw-bold" : "nav-link"}>Home</NavLink>
                            <NavLink to="/students" end className={({ isActive }) =>isActive ? "nav-link active fw-bold" : "nav-link"}>Students</NavLink>
                            
                            {role === "ADMIN" && (
                                <NavLink to="/students/add" className={({ isActive }) =>isActive ? "nav-link active fw-bold" : "nav-link"}>Add Student</NavLink>
                            )}
                            
                            <button type="button" className="btn btn-outline-light" onClick={handleLogout}>
                                Logout
                            </button>
                        </>
                    )}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;

                