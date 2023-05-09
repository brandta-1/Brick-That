const router = require('express').Router();
const { Model } = require('sequelize');
const { User, Lego } = require('../../model');

router.post('/', async (req, res) => {
    try {
        
        await Lego.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json("success")

    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/saved', async (req, res) => {
    try {

        const legoData = await Lego.findByPk(req.session.user_id, {

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

