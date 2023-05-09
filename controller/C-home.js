const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {logged_in: req.session.logged_in})
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