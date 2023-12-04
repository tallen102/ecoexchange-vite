import express from 'express';
import mysql from 'mysql'

const app = express();
app.use(express.json())

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"tiyaallen",
    database: "ecoexchange"
})


app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
});
app.listen(8800, () =>{
    console.log("HI Tiya");
})
