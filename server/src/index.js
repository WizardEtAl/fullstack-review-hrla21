const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));


app.use('/', express.static(path.join(__dirname, '../../client/index.html')));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));