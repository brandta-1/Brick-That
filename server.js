const path = require('path');
const express = require('express');
const routes = require('./controller/api');

//test port
const PORT = process.env.PORT || 3001;

const app = express();

//Middleware for parsing and 
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ extended: true }));

//serving static assets in our public folder
app.use(express.static('public'));

//homepage route is just /
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.use(routes);

app.listen(PORT, () => console.log(PORT+' is active '));