const User = require('./User');
const Lego = require('./lego');

User.hasMany(Lego, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


Lego.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Lego };