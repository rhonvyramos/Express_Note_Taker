const express = require("express");
const app = express();

// const notes_route = require("./notes");
const path = require("path");

const PORT = process.env.PORT || 3001;

// app.use("/notes", notes_route);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"))
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../../notes.html"))
});

app.listen(PORT, () => {
    console.log(`Express server on http://localhost:${PORT}`);
});