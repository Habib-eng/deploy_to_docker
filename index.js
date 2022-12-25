import express from "express";

const app = express();

app.use('/home', (req, res, next) => {
    res.status(200).json([{
      nom : "Jlejla",
      prenom : "Habib"  
    }])
});

app.use('/', (req, res, next) => {
    res.status(200).send("<h1 style='text-align:center;margin:200px;font-size:120px'> Service Number 1</h1>");
});

app.listen(8081,() => {
    console.log("Running on port 8080");
})