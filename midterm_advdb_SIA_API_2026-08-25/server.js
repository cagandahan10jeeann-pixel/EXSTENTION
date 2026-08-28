// naga-load sang Express framework,naga-handle sang incoming HTTP requests kag responses sang API
const express = require("express");    
const app = express();                                    

const studentRoutes = require("./routes/studentRoutes");

require("./config/db");

// Middleware
app.use(express.json()); //

// Routes
app.use("/api/students", studentRoutes);

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Student Management API is running"
    });
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});