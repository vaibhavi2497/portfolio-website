const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: true }));

// Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
    res.render("index", {
        title: "Portfolio"
    });
});

// Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});