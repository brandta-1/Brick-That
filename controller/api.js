const router = require('express').Router();
const db = require('./db/db');

// create
router.post("/api/create", async (req, res) => {
    // Todo check for the body data
    // TODO: feed the body data into the db
    // respond
    //
    //  Send the following JSON object to create a user
    //  {
    //     user: {
    //        ... anything you need to pass in username, passwordHash, etc
    //     }
    //  }
    //
    //
    var user = req.body.user
    if(user == undefined || user == null) {
        res.status(403).send()
        return 
    }

    var result = await db.create(user)
    if(result) {
        res.status(200).send(result)
    } else {
        res.status(404).send()
    }
})

// read
router.get("/api/:user", async (req, res) => {
    var user = req.params.user
    if(user == undefined || user == null) {
        res.status(403).send()
        return 
    }

    var result = await db.read(user)
    if(result.length > 0) {
        res.status(200).send(result)
    } else {
        res.status(404).send()
    }
})
// update
router.put("/api/:user", async (req, res) => {
    var user = req.params.user
    if(user == undefined || user == null) {
        res.status(403).send()
        return 
    }

    var result = await db.update(user)
    if(result.length > 0) {
        res.status(200).send(result)
    } else {
        res.status(404).send()
    }
})
//?

// delete
router.delete("/api/delete", async (req, res) => {
    // Todo check for the body data
    // TODO: feed the body data into the db
    // respond
    var user = req.params.user
    if(user == undefined || user == null) {
        res.status(403).send()
        return 
    }

    var result = await db.delete(user)
    if(result.length > 0) {
        res.status(200).send(result)
    } else {
        res.status(404).send()
    }
})

module.exports = router;