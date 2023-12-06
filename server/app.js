import express from 'express';
import mysql from 'mysql'
import dotenv from'dotenv';
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import cors from 'cors'

dotenv.config({
    path: './.env'
})

const app = express();
app.use(express.json())
app.use(cors())
app.use("/server/auth", authRoutes)
app.use("/server/users", userRoutes)

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

