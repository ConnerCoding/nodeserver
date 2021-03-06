const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('getting root');
});

app.get('/about', (req, res) => {
    res.send('getting about');
});

app.listen(port);