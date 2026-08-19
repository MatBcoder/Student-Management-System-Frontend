function StudentTable({ students, onEdit, onDelete }) {
    return (
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
                                <button className="btn btn-primary btn-sm me-2" onClick={() => onEdit(student.studentNumber)}>Edit</button>
                                                           
                                <button className="btn btn-danger btn-sm" onClick={() => onDelete(student.studentNumber)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}

export default StudentTable;