import api from "../api/axios";

const StudentService = {
    getStudents() {
        return api.get("/students");
    }
};

export default StudentService;