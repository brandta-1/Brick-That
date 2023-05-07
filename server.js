const express = require('express');
const path = require('path');
const routes = require('./controller');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))



//serving static assets in our public folder
app.use(express.static('public'));

//homepage route is just /
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.use(routes);

app.listen(PORT, () => console.log(PORT + ' is active '));