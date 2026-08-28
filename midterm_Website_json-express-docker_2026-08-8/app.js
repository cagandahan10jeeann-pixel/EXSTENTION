// ==========================================
// ZODIAC EXPRESS WEBSITE
// ==========================================

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// ==========================================
// GET ZODIAC DATA
// ==========================================

app.get("/api/zodiac", (req, res) => {

    const filePath = path.join(
        __dirname,
        "data",
        "zodiac.json"
    );

    fs.readFile(filePath, "utf8", (err, data) => {

        if (err) {

            console.error(err);

            return res.status(500).json({
                error: "Unable to read zodiac data"
            });

        }

        try {

            const zodiac = JSON.parse(data);

            res.json(zodiac);

        } catch (error) {

            res.status(500).json({
                error: "Invalid JSON data"
            });

        }

    });

});

// ==========================================
// HOME PAGE
// ==========================================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(
            __dirname,
            "public",
            "index.html"
        )
    );

});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});