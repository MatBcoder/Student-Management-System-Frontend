import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div classname= "container">
                <NavLink className="navbar-brand" to="/">Student Management</NavLink>
                <div className= "navbar-nav">
                    <NavLink className = "nav-link" to="/">Home</NavLink>
                    <NavLink className = "nav-link" to="/students">Students</NavLink>
                    <NavLink className = "nav-link" to="/students/add">Add Student</NavLink>
                    
                </div>

            </div>
        </nav>
    );
}

export default Navbar;