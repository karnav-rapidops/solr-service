// Maker functions 
const makeInsertUserAction = require('./insert-user');
const makeGetUserAction = require('./get-user')
const makeUpdateUserAction = require('./update-user')
const makeDeleteUserAction = require('./delete-user');


// Usecases
const { user } = require('../../use-cases')


// Controller functions 
const insertUserAction = makeInsertUserAction({
    insertUser: user.insertUser,
})
const getUserAction = makeGetUserAction({
    getUser: user.getUser,
})
const updateUserAction = makeUpdateUserAction({
    updateUser: user.updateUser,
})
const deleteUserAction = makeDeleteUserAction({
    deleteUser: user.deleteUser,
})

module.exports = Object.freeze({
    insertUserAction,
    getUserAction,
    updateUserAction,
    deleteUserAction,
})