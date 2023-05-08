const router = require('express').Router();

router.get('/', (req, res) => {


        res.render("upload-photo")



})

module.exports = router;