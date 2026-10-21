import api from "../api/axios";

const AuthService = {
    login(username, password){
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        return api.post("/auth/login", formData, { 
            headers: { "Content-Type": "application/x-www-form-urlencoded" } });

    }
    
}
export default AuthService;