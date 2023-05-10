const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {

        res.render("upload-photo", {logged_in: req.session.logged_in})
        
})

module.exports = router;