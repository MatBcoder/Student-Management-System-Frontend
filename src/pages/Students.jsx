import { useState, useEffect } from "react";
import StudentService from "../services/StudentService";

function Students(){
    const [students, setStudents] = useState([]);

    useEffect (() => {
        StudentService.getStudents()
        .then((response) => {
            console.log("Fetched students:", response.data);
            setStudents(response.data);
        })
        .catch((error) => {
            console.error("Error fetching students:", error);
        });
    }, []);

    return (
        <div className="container mt-4">
            <h1>Students</h1>
            
        </div>
    );
}

export default Students;