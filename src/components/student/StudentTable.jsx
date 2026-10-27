function StudentTable({ students, onEdit, onDelete, onSort, sortBy, direction, role}) {

    const getSortIndicator = (column) => {
        if (sortBy !== column) {
            return "";
        }

        return direction === "asc" ? " ↑" : " ↓";
    };

    return (
        <table className = "table table-striped table-hover">
                <thead className= "table-dark">
                    <tr>
                        <th onClick={() => onSort("studentNumber")}>Student Number {getSortIndicator("studentNumber")}</th>
                        <th onClick={() => onSort("firstName")}>First Name {getSortIndicator("firstName")}</th>
                        <th onClick={() => onSort("lastName")}>Last Name {getSortIndicator("lastName")}</th>
                        <th onClick={() => onSort("course")}>Course {getSortIndicator("course")}</th>
                        <th onClick={() => onSort("age")}>Age {getSortIndicator("age")}</th>
                        {role === "ADMIN" && (
                            <th>Action</th>
                        )}
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
                            
                            
                            {role === "ADMIN" && (
                                <td>
                                    <button className="btn btn-primary btn-sm me-2" onClick={() => onEdit(student.studentNumber)}>Edit</button>
                                                               
                                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(student.studentNumber)}>Delete</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
    );
}

export default StudentTable;