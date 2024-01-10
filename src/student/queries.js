exports.getStudents = "SELECT * FROM info";
exports.getStudentById = "SELECT * FROM info WHERE id = $1"; // We use dollar sign for parameter
exports.checkEmailExists = "SELECT s FROM info s WHERE s.email = $1";
exports.addStudent =
  "INSERT INTO info (name, email, age, dob) VALUES ($1, $2, $3, $4)";
exports.removeStudent = "DELETE FROM info WHERE id = $1";
exports.updateStudent = "UPDATE info SET name = $1 WHERE id = $2";
