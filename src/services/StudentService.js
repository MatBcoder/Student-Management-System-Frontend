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
    }
};

export default StudentService;