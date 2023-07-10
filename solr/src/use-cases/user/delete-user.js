module.exports = function makeDeleteUser({
    deleteUserDb,
    validationError,
    Joi,
})
{
    return async function deleteUser({ usersToDelete, languageName })
    {
        validateInputData({ usersToDelete })     

        return await deleteUserDb({ usersToDelete, languageName });
    }

    function validateInputData({ usersToDelete })
    {
        const schema = Joi.object({
            id: Joi.guid({ version: 'uuidv4' }).required(), 
        })

        for(let userId of usersToDelete)
        {
            let { error } = schema.validate(userId);

            if(error) {
                throw new validationError(error.message)
            }
        }
    }
}