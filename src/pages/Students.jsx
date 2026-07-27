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
            <h1>Students List</h1>
            <p className= "text-muted">Total Students: {students.length}</p>

            <table className = "table table-striped table-hover">
                <thead className= "table-dark">
                    <tr>
                        <th>Student Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Course</th>
                        <th>Age</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map(student => (
                        <tr key= {student.id}>
                            <td>{student.studentNumber}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.course}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Students;