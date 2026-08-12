import { useState } from "react";
import {useNavigate} from "react-router-dom";

import StudentService from "../services/StudentService";
import { validateStudent } from "../utils/studentValidation";

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
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control" name="firstName" value={student.firstName} onChange={handleChange} />
                    {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control" name="lastName" value={student.lastName} onChange={handleChange} />
                    {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Course</label>
                    <input type="text" className="form-control" name="course" value={student.course} onChange={handleChange} />
                    {errors.course && <div className="text-danger">{errors.course}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" name="age" value={student.age} onChange={handleChange} />
                    {errors.age && <div className="text-danger">{errors.age}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Add Student</button>

            </form>
        </div>
    );

}

export default AddStudent;