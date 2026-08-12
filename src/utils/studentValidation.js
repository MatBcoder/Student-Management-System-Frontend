export const validateStudent = (student) => {
    const errors = {};
    if(!student.firstName.trim()) errors.firstName = "First Name is required.";
    if(!student.lastName.trim()) errors.lastName = "Last Name is required.";
    if(!student.course.trim()) errors.course = "Course is required.";
    if(!student.age) errors.age = "Age is required.";
    else if(student.age < 16) errors.age = "Age must be at least 16.";
    return errors;
}