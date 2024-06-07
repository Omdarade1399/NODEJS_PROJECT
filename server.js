const express = require('express');
const app = express();
const {getToken, infoPass} = require('./Middleware/token.js');
const port = 3000;

app.get('/query', getToken, (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`<h1>Query Parameters</h1><p>Name: ${name}</p><p>Age: ${age}</p>`);
});

app.get('/path/:name/:age', infoPass, (req, res) => {
    const name = req.params.name;
    const age = req.params.age;
    res.send(`<h1>Path Parameters</h1><p>Name: ${name}</p><p>Age: ${age}</p>`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
