const express = require("express");
const app = express();

app.get('/', (req, res)=> {
    return res.send({hi: "there"});
});

app.get('/hellow', (req, res)=> {
    return res.send({hi: "there", t: "HELLLLL"});
});

const PORT = process.env.PORT || 5000 ;
app.listen(PORT);