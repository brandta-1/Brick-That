const router = require('express').Router();
const { User, Lego } = require('../model');

router.get('/', (req, res) => {
    
    res.render('homepage')
})


module.exports = router;