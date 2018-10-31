const express = require('express');
const bodyParser = require('body-parser');
let path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')));

const port = 4001;
app.listen(port, () => console.log(`Listening on port ${port}.`))