const { validationError } = require('../../exceptions') 

const makeCreateCollection = require('./create-collection');
const makeCheckCollection = require('./check-collection')

const axios = require('axios')
const Joi = require('joi')

const { collectionDbMethods } = require('../../data-access');

const createCollection = makeCreateCollection({
    Joi,
    validationError,
    axios,
})
const checkCollection = makeCheckCollection({
    checkCollectionDb: collectionDbMethods.checkCollection,
}); 


module.exports = Object.freeze({
    createCollection,
    checkCollection,
})