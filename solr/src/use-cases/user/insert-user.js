module.exports = function makeInsertUser({
    insertUserDb,
    checkCollection,
    createCollection,
    validationError,
    Joi,
}) 
{
    return async function insertUser({ documents, languageName }) {

        validateInputData({ documents, languageName })

        const isCollectionExist = await checkCollection({ languageName });

        if(!isCollectionExist)
        {
            await createCollection({ collectionName: languageName, numShards: 1 , replicationFactor: 1 })
        }

        return await insertUserDb({ documents, languageName })
        
    }

    function validateInputData({ documents, languageName })
    {
        let { error } = Joi.string().required().validate(languageName);

        if(error)
        {
            throw new databaseError(error.message);
        }
 
        if(!documents.length)
        {
            throw new validationError('Input data not provided!')
        }

        const schema = Joi.object({
            name: Joi.string().min(3).max(15).required(),
            city: Joi.string().min(3).max(15).required(),
            dob:  Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/).required()
        })


        for(let document of documents)
        {
            let { error } = schema.validate(document);

            if(error)
            {
                console.log(error.message);
                throw new validationError(error.message);
            }
                
        }
    }
}