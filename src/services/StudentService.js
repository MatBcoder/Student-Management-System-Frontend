import api from "../api/axios";

const StudentService = {
    getStudents(page, size, sortBy, direction) {
        return api.get("/students", {
            params: {
                page,
                size,
                sortBy,
                direction
            }
        });
    },

    getStudentByStudentNumber(studentNumber) {
        return api.get(`/students/${studentNumber}`);
    },

    updateStudent(studentNumber, student){
        return api.put(`/students/${studentNumber}`, student);
    },

    deleteStudent(studentNumber){
        return api.delete(`/students/${studentNumber}`);
    },

    addStudent(student){
        return api.post("/students", student);
    }
};

export default StudentService;