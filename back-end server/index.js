const express = require('express')
const app = express()
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://abdellanimohamedabdeslam:GjgAnRea@hHUsrdV@myfirstdatabase.q2ewp.mongodb .net/?retryWrites=true&w=majority&appName=myFirstDataBase")
  .then(() => console.log("Connected successfully to myFirstDataBase"))
  .catch((error) => console.error("Connection error:", error));

// mongodb+srv://abdellanimohamedabdeslam:GjgAnRea@hHUsrdV@myfirstdatabase.q2ewp.mongodb .net/?retryWrites=true&w=majority&appName=myFirstDataBase
app.use(express.json())

app.get('/get',(req,res)=>{
    let number="--";
    for(let i=0;i<100;i++){
        number+=i+"--"
    }
    res.render("index.ejs",{
        name : "abdeslam",
        job : req.query.job,
        number3:number
    })
})

app.listen(3000,()=>{
})