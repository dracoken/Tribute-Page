const port = 3000;
const express = require('express');
const app = express();


app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) =>
{
    //we need to render our ejs (html+) file here with the render engine
    res.render('index');
});

app.get("/switch", (req,res)=>
{
    res.render('switchPage');
});

app.listen(port)
{
    console.log("listiening on port " + port);
}