const User = require('./User');
const Lego = require('./Lego');


User.hasMany(Lego, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


Lego.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = { User, Lego };