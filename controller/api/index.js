const router = require('express').Router();
const lego = require('./lego-routes');


router.use('/lego', lego);

module.exports = router;