const pool = require("./../../db");
const queries = require("./queries");

exports.getStudents = function (req, res) {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

exports.getStudentById = function (req, res) {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

exports.addStudent = function (req, res) {
  const { name, email, age, dob } = req.body;
  // Check if email already exist
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      return res.send("Email already Exist");
    }
    pool.query(
      queries.addStudent,
      [name, email, age, dob],
      (error, results) => {
        // if (error) throw error;
        res.status(201).send("Student created Successfull");
      }
    );
  });
};

exports.removeStudent = function (req, res) {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      return res.send("Student does not exist in the database");
    }
    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) throw error;
      return res.send("Student removed successfully");
    });
  });
};

exports.updateStudent = function (req, res) {
  const { name } = req.body;
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      return res.send("Student does not exist in the database");
    }
    pool.query(queries.updateStudent, [name, id], (error, results) => {
      if (error) throw error;
      return res.send("Student updated successfully");
    });
  });
};
