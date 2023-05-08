var mysql = require("mysql")

module.exports = {
    create: (params) => {
        return library("CREATE_EXAMPLE").replace('~1', mysql.escape(params.username))
    },

    read: (params) => {
        return library("READ_EXAMPLE")
        .replace('~1', mysql.escape(params.username))
        .replace('~2', mysql.escape(params.passwordHash))
        .replace('~3', mysql.escape(params.email))
    },

    update: (params) => {
        return library("UPDATE_EXMPLE").replace('~1', mysql.escape(params.username))
    },

    delete: (params) => {
        return library("DELETE_EXAMPLE").replace('~1', mysql.escape(params.username))
    },
}

function library(strName) {
    try {
        var lib = {
            'CREATE_EXAMPLE': "SELECT * FROM DBTable WHERE FAKE_COL = ~1 and wher FAKE_COL_2 = ~2",
            'READ_EXAMPLE': "SELECT * FROM DBTable WHERE FAKE_COL = ~1 AND FAKE_COL = ~2 AND FAKE_COL = ~3",
            'UPDATE_EXAMPLE': "SELECT * FROM DBTable WHERE FAKE_COL = ~1",
            'DELETE_EXAMPLE': "SELECT * FROM DBTable WHERE FAKE_COL = ~1"
        }
        return lib[strName]
    } catch(error) {
        console.log(error)
    }
}