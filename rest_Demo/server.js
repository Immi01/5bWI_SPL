const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = 3000;

let data = [
    {name: "hans", age: 30},
    {name: "peter", age: 20},
    {name: "sepp", age: 32},
    {name: "paul", age: 50},
]

app.get('/', (req, res) => {
    res.send("joa");
})

app.get('/people', (req, res) => {
    res.send(data);
})

app.get('/people/:id', (req, res) => {
    let id = req.params.id;
    res.send(data[id]);
})

app.delete('/people/:id', (req, res) => {
    let id = req.params.id;
    res.send("deleted " + JSON.stringify(data[id]));
    data.splice(id,1);
})

app.post('/people', (req, res) => {
    data.push(req.body);
    res.send(req.body);
})

app.listen(port, ()=> console.log(`Server listening on Port ${port}`));
