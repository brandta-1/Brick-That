const router = require('express').Router();
const lego = require('./lego-routes');
const user = require('./C-user');

router.use('/lego', lego);
router.use('/user', user);

module.exports = router;