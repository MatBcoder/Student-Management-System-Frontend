import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

import StudentService from "../services/StudentService";

function Students(){
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const handleDelete = (studentNumber) => { const confirm= window.confirm("Are you sure you want to delete this student?");
        if(!confirm){
            return;
        }

        StudentService.deleteStudent(studentNumber)
        .then(() => {console.log("Student Successfully deleted."); 
            setStudents(currentStudents =>
                currentStudents.filter(
                    student => student.studentNumber !== studentNumber
                )
            );})
        .catch((error) => {console.error("Error deleting student:", error);});
    };


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
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map(student => (
                        <tr key= {student.studentNumber}>
                            <td>{student.studentNumber}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.course}</td>
                            <td>{student.age}</td>
                            <td>
                                <button className="btn btn-primary btn-sm me-2" 
                                    onClick={() => navigate(`/students/edit/${student.studentNumber}`)}
                                >
                                    Edit
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student.studentNumber)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Students;