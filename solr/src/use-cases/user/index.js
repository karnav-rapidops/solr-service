// Maker functions 
const makeInsertUser = require('./insert-user');
const makeGetUser = require('./get-user');
const makeUpdateUser = require('./update-user')
const makeDeleteUser = require('./delete-user');

// Data-access methods
const { userDbMethods } = require('../../data-access');

// Exceptions
const { validationError } = require('../../exceptions')

// Collection usecases
const collection = require('../../use-cases/collection')

// NPMs
const Joi = require('joi')

const insertUser = makeInsertUser({
    insertUserDb: userDbMethods.insertUser,
    checkCollection: collection.checkCollection,
    createCollection: collection.createCollection,
    insertCollection: collection.insertCollection,
    validationError,
    Joi,
})
const getUser = makeGetUser({
    getUserDb: userDbMethods.getUser,
    validationError,
    Joi,
})
const updateUser = makeUpdateUser({
    updateUserDb: userDbMethods.updateUser,
    validationError,
    Joi,
})
const deleteUser = makeDeleteUser({
    deleteUserDb: userDbMethods.deleteUser,
    validationError,
    Joi,
})

module.exports = Object.freeze({
    insertUser,
    getUser,
    updateUser,
    deleteUser,
})  