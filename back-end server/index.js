const express = require('express');
const app = express();
const mongoose = require("mongoose");

async function getMongoose() {
    try {
        const url = await mongoose.connect("mongodb+srv://abdellanimohamedabdeslam:<db_password>@myfirstdatabase.q2ewp.mongodb.net/?retryWrites=true&w=majority&appName=myFirstDataBase");
        console.log("Connected successfully to myFirstDataBase");
    } catch (error) {
        console.error("Connection error:", error);
    }
}
getMongoose();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());

app.get('/get', (req, res) => {
    let number = "--";
    for (let i = 0; i < 100; i++) {
        number += i + "--";
    }
    res.render("index.ejs", {
        name: "abdeslam",
        job: req.query.job,
        number3: number
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
