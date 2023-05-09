const router = require('express').Router();
const { response } = require('express');
const { User, Lego } = require('../model');

router.get('/', (req, res) => {
    
    res.render('homepage')
})

// Router Login
router.get('/Login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect(
            '/Homepage'
        );
        return;
    }
    res.render('login')
})

module.exports = router;