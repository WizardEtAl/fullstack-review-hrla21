const express = require('express');
const path = require('path');
const parser = require('body-parser');

const routes = require('./routes/routes');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../../client')));

app.use('/api', routes);

app.use('/*', (req, res) => res.status(404).send('This page does not exist'));
// app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));