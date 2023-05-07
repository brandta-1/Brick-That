var mysql = require("mysql")

module.exports = {
    create: (params) => {
        return library("CREATE_EXAMPLE").replace('~1', mysql.escape(params.username))
    },

    read: (params) => {
        return library("READ_EXAMPLE").replace('~1', mysql.escape(params.username))
    },

    update: (params) => {

    },

    delete: (params) => {

    },
}

function library(strName) {
    try {
        var lib = {
            'CREATE_EXAMPLE': "SELECT * FROM DBTable WHERE FAKE_COL = ~1 and wher FAKE_COL_2 = ~2",
            'READ_EXAMPLE': "SELECT * FROM DBTable WHERE FAKE_COL = ~1",
            'UPDATE_EXAMPLE': "SELECT * FROM DBTable WHERE FAKE_COL = ~1",
            'DELETE_EXAMPLE': "SELECT * FROM DBTable WHERE FAKE_COL = ~1"
        }
        return lib[strName]
    } catch(error) {
        console.log(error)
    } finally {
        lib = nil
    }
}