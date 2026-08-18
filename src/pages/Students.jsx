import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

import StudentService from "../services/StudentService";
import StudentTable from "../components/student/StudentTable";

function Students(){
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    const handleDelete = (studentNumber) => { const isConfirmed= window.confirm("Are you sure you want to delete this student?");
        if(!isConfirmed){
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
    const handleEdit = (studentNumber) => {
        navigate(`/students/edit/${studentNumber}`);
    }


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
            
            <StudentTable
                students={students}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

        </div>
    );
}

export default Students;