const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Lego } = require('../model');

router.get('/', withAuth, async (req, res) => {
    try {

        const userData = await User.findByPk(req.session.user_id, {
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
            ...user, logged_in: req.session.logged_in, helpers: {
                renderLegos(x) { return `<img alt="not working" src=${JSON.stringify(x)}/>`; }
            }
        })

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;