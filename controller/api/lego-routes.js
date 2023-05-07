const router = require('express').Router();
const { example } = require('../../pretend_db')
const fs = require('fs');

router.post('/', (req, res) => {
    try {

        let data = req.body;

        //TODO: this writefile will be replaced by sequelize and a real db

        fs.writeFile("./pretend_db/example.json", JSON.stringify(data),
            {
                encoding: "utf8",
                flag: "w",
                mode: 0o666
            },
            (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("File written\n");
                    console.log(fs.readFileSync("./pretend_db/example.json", "utf8"));
                }
            });

        res.status(200).json("success")
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/saved', (req, res) => {
    try {

        return res.json(example)

    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;

