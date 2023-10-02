// requiring express
const express=require("express");
// defining port number
const port=7000;
// calling express as function
const app=express();

const db=require("./config/mongoose")

// middleware for put the data into req.body
app.use(express.urlencoded());

// setting view engine, EJS
app.set("views","./views");
app.set("view engine","ejs");

// initializing routes

app.use("/", require("./routes"));

// make run our server run on defined port
app.listen(port,function(error){
    if (error){
        console.log("Error in server running");
        return;
    }
    console.log("Server up and running port:",port)
})