const router = require('express').Router();
const { Model } = require('sequelize');
const { User, Lego } = require('../../Model');

router.post('/', async (req, res) => {
    try {

        //TODO change to session id
        const newLego = await Lego.create({
            ...req.body,
            user_id: 1
        });

        res.status(200).json("success")

    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/saved', async (req, res) => {
    try {


        //TODO: change to session id
        const legoData = await Lego.findByPk(2, {

            raw: true,
            attributes: ['lego_url'],
            include: [
                {
                    model: User, as: "user"
                }
            ]
        });

        res.json(legoData.lego_url)

    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;

