const router = require('express').Router();

router.get('/', (req,res) => {
    console.log("hello backend");

    res.status(200).json("success")
})

module.exports = router;