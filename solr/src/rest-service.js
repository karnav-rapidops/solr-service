const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

initUserRoutes();

function initUserRoutes(){

    router.post('/user', controllers.user.insertUserAction);
    router.get('/user', controllers.user.getUserAction);
    router.patch('/user/', controllers.user.updateUserAction);
    router.delete('/user', controllers.user.deleteUserAction);
}


module.exports = router