module.exports = function makeGetUser({
    getUserDb,
    validationError,
    Joi,
}) 
{
    return async function getUser({ searchTerm, fieldsToGet, languageName }) {

        validateInputData({ searchTerm, fieldsToGet })

        return await getUserDb({ searchTerm, fieldsToGet, languageName })
    }

    function validateInputData({ searchTerm, fieldsToGet })
    {

        let { error } = Joi.string().required().validate(searchTerm);

        if(error)
        {
            throw new validationError(error.message);
        }

        for(let field of fieldsToGet)
        {
            let { error } = Joi.string().required().validate(field);

            if(error) 
                throw new validationError(error.message) 
        }
    }
}
