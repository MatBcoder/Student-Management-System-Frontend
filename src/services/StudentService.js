import api from "../api/axios";

const StudentService = {
    getStudents() {
        return api.get("/students");
    },

    getStudentByStudentNumber(studentNumber) {
        return api.get(`/students/${studentNumber}`);
    },

    updateStudent(studentNumber, student){
        return api.put(`/students/${studentNumber}`, student);
    },

    deleteStudent(studentNumber){
        return api.delete(`/students/${studentNumber}`);
    }
};

export default StudentService;