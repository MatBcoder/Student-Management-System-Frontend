import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

import StudentService from "../services/StudentService";
import StudentTable from "../components/student/StudentTable";

function Students(){
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    //for pagination & sorting
    const [page, setPage] = useState(0);
    const [size] = useState(5);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [sortBy, setSortBy] = useState("studentNumber");
    const [direction, setDirection] = useState("asc");

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

    const handleSort = (column) =>{
        if(sortBy===column){
            setDirection(direction === "asc" ? "desc" : "asc");
        }
        else{
            setSortBy(column);
            setDirection("asc");
        }
        setPage(0); //resets pagination
    }


    useEffect (() => {
        setLoading(true);
        setError("");

        StudentService.getStudents(page, size, sortBy, direction)
        .then((response) => {
            console.log("Fetched students:", response.data.content);
            setStudents(response.data.content);
            setTotalPages(response.data.totalPages);
            setTotalElements(response.data.totalElements);
        })
        .catch((error) => {
            console.error("Error fetching students:", error);
            setError("Failed to fetch students. Please try again later.");
        })
        .finally(() => {
            setLoading(false);
        });

    }, [page, size, sortBy, direction]);

    if(loading){
        return (
            <div className="container mt-4">
                <h3>Loading students...</h3>
            </div>
        );
    }

    if(error){
        return(
            <div className="container mt-4">
                <h3 className="alert alert-danger">{error}</h3>
            </div>
        )
    }

    return (
        <div className="container mt-4">
            <h1>Students List</h1>
            <p className= "text-muted">Total Students: {totalElements}</p>

            <StudentTable
                students={students}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onSort={handleSort}
                sortBy={sortBy}
                direction={direction}
            />
            
            <div className="d-flex justify-content-between align-items-center mt-3">
                <button className="btn btn-secondary" disabled={page === 0} onClick= {() => setPage(page - 1)}>Previous</button>
                <span>Page {page + 1} of {totalPages}</span>
                <button className="btn btn-secondary" disabled={page + 1 >= totalPages} onClick= {() => setPage(page + 1)}>Next</button>

            </div>

        </div>
    );
}

export default Students;