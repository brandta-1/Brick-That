const sequelize = require('../config');
const { User, Lego } = require('../Model');

const userData = require('./users.json');
const legoData = require('./legos.json');

const seedDatabase = async () => {

    await sequelize.sync({ force: true });

    const theUsers = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });




    await Lego.create({
        ...legoData,
        user_id: theUsers[0].id,
    });
   

    process.exit(0);
};

seedDatabase();