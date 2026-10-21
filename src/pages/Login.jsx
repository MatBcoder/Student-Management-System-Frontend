import { useState } from "react";
import AuthService from "../services/AuthService";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit=async (event) => {
        event.preventDefault();
        try {
            const response = await AuthService.login(username, password);//send credentials to Spring Boot API
            sessionStorage.setItem("token", response.data); //store the token in session storage
            console.log("Login successful. Token stored in session storage.");
            
        } 
        catch (error) {
            console.error("Login failed:", error);
        }
    };

    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h2 className= "mb-4">Login </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input 
                                type="text"
                                className= "form-control"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input 
                                type="password"
                                className= "form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;