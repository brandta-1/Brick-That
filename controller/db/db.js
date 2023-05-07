var commands = require("sqlcommands")
var mysql = require("mysql")
var pool = mysql.createPool({
    connectionLimit: 10,
    host: "",
    user: "username",
    password: "password",
    port: 3306,
    database: "DBName"
})

module.exports = {
    create: (user, _callback) => {
        internalCreate(user, _callback)
    },
    read: (user) => {
        internalRead(user)
    },
    update: (user) => {
        internalUpdate(user)
    },
    delete: user => {
        internalDelete(user)
    }
}

function internalCreate(user, _callback) {
    // do error checking on the user object before pasing into the DB function
    pool.query(commands.create({
        username: user.name,
        passwordHash: user.passwordHash
    }), 
    (error, results, fields) => {
        if(error) {
            console.log(error)
            _callback(false)
            return
        }

        // check the results before sending true etc for the password hash to match etc
        _callback(true)
    })
}

function internalRead(user) {
    // do error checking on the user object before pasing into the DB function
    pool.query(commands.read({
        username: user.name
    }), 
    (error, results, fields) => {
        if(error) {
            console.log(error)
            _callback([])
            return
        }

        // you can wrap the object or you can return it
        // either create clean new names or use DB names (not recommened)
        // check the results before sending true etc for the password hash to match etc
        if(results.length > 0) {
            var returnResults = results.map(item => {
                return {
                    newName: item.DB_NAME
                }
            })
            _callback(returnResults)
        } else {
            _callback([])
        }
    })
}

function internalUpdate(user) {

}

function internalDelete(user) {

}