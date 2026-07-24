import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div classname= "container">
                <NavLink className="navbar-brand" to="/">SMS Portal</NavLink>
                <div className= "navbar-nav">
                    <NavLink to="/" className={({ isActive }) =>isActive ? "nav-link active fw-bold" : "nav-link"}>Home</NavLink>
                    <NavLink to="/students" end className={({ isActive }) =>isActive ? "nav-link active fw-bold" : "nav-link"}>Students</NavLink>
                    <NavLink to="/students/add" className={({ isActive }) =>isActive ? "nav-link active fw-bold" : "nav-link"}>Add Student</NavLink>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;


{/* <NavLink className = "nav-link" to="/">Home</NavLink>
    <NavLink className = "nav-link" to="/students">Students</NavLink>
    <NavLink className = "nav-link" to="/students/add">Add Student</NavLink>*/}
                