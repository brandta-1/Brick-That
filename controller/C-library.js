const router = require('express').Router();

const { User, Lego } = require('../model');

router.get('/', async (req, res) => {
    try {

        const userData = await User.findByPk(1, {
            attributes: { exclude: ['password'] },
            include: [
                {
                    model: Lego
                }
            ]
        });

        let user = { ...userData.get({ plain: true }) };

        console.log(user);

        res.render('library', {
            ...user, helpers: {
                renderLegos(x) { return `<img alt="not working" src=${JSON.stringify(x)}/>`; }
            }
        })

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;