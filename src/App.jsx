import { useEffect } from "react";
import api from "./api/axios";

function App() {

    useEffect(() => {

        api.get("/students")
            .then(response => {
                console.log("Connection successful");
                console.log(response.data);
            })
            .catch(error => {
                console.error("Connection failed");
                console.error(error);
            });

    }, []);

    return (
        <h1>Student Management System</h1>
    );

}

export default App;