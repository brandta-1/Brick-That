const expr = require('express');
const path = require('path');

//test port
const PORT = process.env.PORT || 3001;

const app = expr();

//Middleware for parsing and 
app.use(expr.json());
app.use(expr.urlencoded({ extended: true }));

//serving static assets in our public folder
app.use(expr.static('public'));

//homepage route is just /
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.listen(PORT, () => console.log(PORT+' is active '));