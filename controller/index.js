const router = require('express').Router();
const api = require('./api');
const home = require('./C-home');
const lib = require('./C-library');
const upload = require('./C-upload');

router.use('/api', api);
router.use('/',home);
router.use('/library',lib);
router.use('/upload', upload);

module.exports = router;