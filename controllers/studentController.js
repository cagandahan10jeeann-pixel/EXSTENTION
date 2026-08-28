const db = require("../config/db"); git status

// GET all students
exports.getStudents = (req, res) => {
    const sql = "SELECT * FROM students";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                error: "Database error"
            });
        }

        res.status(200).json(results);
    });
};


// GET student by ID
exports.getStudentById = (req, res) => {
    const id = req.params.id;

    const sql = "SELECT * FROM students WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                error: "Database error"
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                error: "Student not found"
            });
        }

        res.status(200).json(results[0]);
    });
};


// CREATE student
exports.createStudent = (req, res) => {
    const { name, email, course, year_level } = req.body;

    if (!name || !email || !course || !year_level) {
        return res.status(400).json({
            error: "All fields are required"
        });
    }

    const sql = `
        INSERT INTO students
        (name, email, course, year_level)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, course, year_level],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    error: "Database error"
                });
            }

            res.status(201).json({
                message: "Student created successfully",
                id: result.insertId
            });
        }
    );
};


// UPDATE student
exports.updateStudent = (req, res) => {
    const id = req.params.id;

    const { name, email, course, year_level } = req.body;

    if (!name || !email || !course || !year_level) {
        return res.status(400).json({
            error: "All fields are required"
        });
    }

    const sql = `
        UPDATE students
        SET name = ?, email = ?, course = ?, year_level = ?
        WHERE id = ?
    `;

    db.query(
        sql,
        [name, email, course, year_level, id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    error: "Database error"
                });
            }

            if (result.affectedRows === 0) {
                return res.status(404).json({
                    error: "Student not found"
                });
            }

            res.status(200).json({
                message: "Student updated successfully"
            });
        }
    );
};


// DELETE student
exports.deleteStudent = (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM students WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                error: "Database error"
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully"
        });
    });
};