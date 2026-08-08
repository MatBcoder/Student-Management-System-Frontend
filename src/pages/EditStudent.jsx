import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import StudentService from "../services/StudentService";


function EditStudent(){
    const { studentNumber } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setStudent({
            ...student,
            [name]: value
        });

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        StudentService.updateStudent(studentNumber, student)
            .then(() => {navigate("/students");})
            .catch((error) => {console.error("Error updating student:", error);});

    };

    useEffect(()=> {StudentService.getStudentByStudentNumber(studentNumber).then((response) => {console.log(response.data); setStudent(response.data);})
    .catch((error) => {console.error("Error fetching student:", error);});}, [studentNumber]);
    
    if (!student) {
        return (
            <div className="container mt-4">
                <h3>Loading student...</h3>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h1>Edit Student: {studentNumber}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className= "form-label">Student Number</label>
                    <input type= "text" className= "form-control" value = {student.studentNumber} disabled/>
                </div>

                <div className="mb-3">
                    <label className= "form-label">First Name</label>
                    <input type= "text" className= "form-control" name = "firstName" value = {student.firstName} onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label className= "form-label">Last Name</label>
                    <input type= "text" className= "form-control" name = "lastName" value = {student.lastName} onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label className= "form-label">Course Name</label>
                    <input type= "text" className= "form-control" name = "course" value = {student.course} onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label className= "form-label">Age</label>
                    <input type= "text" className= "form-control" name = "age" value = {student.age} onChange={handleChange}/>
                </div>

                <button type="submit" className= "btn btn-primary">Update</button>

            </form>
        </div>
        
    );
    
}

export default EditStudent;