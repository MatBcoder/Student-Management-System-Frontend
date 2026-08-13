import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import StudentService from "../services/StudentService";
import { validateStudent } from "../utils/studentValidation";
import StudentForm from "../components/student/StudentForm";


function EditStudent(){
    const { studentNumber } = useParams();
    const navigate = useNavigate();

    const [student, setStudent] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setStudent({
            ...student,
            [name]: value
        });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        const validationErrors = validateStudent(student);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

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
            <StudentForm student={student} 
                errors={errors} 
                onChange={handleChange} 
                onSubmit={handleSubmit} 
                submitButtonText="Update" 
                showStudentNumber={true} />
        </div>
        
        
    );
    
}

export default EditStudent;