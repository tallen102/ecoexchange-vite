import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
});
app.listen(8800, () =>{
    console.log("HI Tiya");
})
