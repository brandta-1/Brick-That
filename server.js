const express = require('express');
const session = require('express-session');
const exprhb = require('express-handlebars');
const path = require('path');
const routes = require('./controller');
const bodyParser = require('body-parser')

const sequelize = require('./config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const PORT = process.env.PORT || 3001;

const app = express();

const hbs = exprhb.create({});

const thisSession = {
    secret: 'secret_placeholder',
    cookie: {
        maxAge: 3600000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(thisSession));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))



//serving static assets in our public folder
app.use(express.static('public'));

//homepage route is just /
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App on at ${PORT}`));
});