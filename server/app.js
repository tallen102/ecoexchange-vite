import express from 'express';
import mysql from 'mysql'
import dotenv from'dotenv';


dotenv.config({
    path: './.env'
})

const app = express();
app.use(express.json())

export const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})
db.connect( (err) => {
    if(err){
        console.log(err)
    }else{
        console.log("mysql connected..")
    }
})



app.get("/", (req, res) => {
    res.send("app.jsx")
});
app.listen(8800, () =>{
    console.log("HI Tiya");
})

