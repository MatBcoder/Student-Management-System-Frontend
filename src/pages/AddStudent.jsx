import { useState } from "react";
import {useNavigate} from "react-router-dom";

import StudentService from "../services/StudentService";
import { validateStudent } from "../utils/studentValidation";
import StudentForm from "../components/student/StudentForm";

function AddStudent(){
    
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        studentNumber: "",
        firstName: "",
        lastName: "",
        course: "",
        age: ""
    });

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
        StudentService.addStudent(student)
            .then(() => {
                console.log("Student successfully added.");
                navigate("/students");
            })
            .catch((error) => {
                console.error("Error adding student:", error);
            });
    };

    return (
        <div className= "container mt-4">
            <h1>Add Student</h1>
            <StudentForm
                student={student}
                errors={errors}
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitButtonText="Add Student"
            />
        </div>
    );

}

export default AddStudent;