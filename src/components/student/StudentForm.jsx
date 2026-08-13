function StudentForm({student, errors, onChange, onSubmit, submitButtonText, showStudentNumber = false}){
    return (
        <form onSubmit={onSubmit}>
            {showStudentNumber && (
                <div className="mb-3">
                    <label className="form-label">Student Number</label>
                    <input type="text" className="form-control" value={student.studentNumber} readOnly/>
                </div>
            )}

            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" name="firstName" value={student.firstName} onChange={onChange} />
                {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lastName" value={student.lastName} onChange={onChange} />
                {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Course</label>
                <input type="text" className="form-control" name="course" value={student.course} onChange={onChange} />
                {errors.course && <div className="text-danger">{errors.course}</div>}
            </div>
            
            <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" name="age" value={student.age} onChange={onChange} />
                {errors.age && <div className="text-danger">{errors.age}</div>}
            </div>

            <button type="submit" className="btn btn-primary">{submitButtonText}</button>
        </form>
    );
}

export default StudentForm;