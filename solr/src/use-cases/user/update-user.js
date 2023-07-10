module.exports = function makeUpdateUser({
    updateUserDb,
    validationError,
    joi,
}) {
    return async function updateUser({ usersToUpdate, languageName }) 
    {
        validateInputData({ usersToUpdate })
        let fieldValue;
        let newValue = {};

        for (let user of usersToUpdate) {
            for (let field in user) {
                if (field == "id")
                    continue;

                fieldValue = user[field];
                newValue = {};
                newValue["set"] = fieldValue;
                user[field] = newValue;
            }
        }
        return await updateUserDb({ usersToUpdate, languageName });
    }

    function validateInputData({ usersToUpdate })
    {
        if(!usersToUpdate.length)
        {
            throw new validationError("Data to update not provided!")
        }
    }
}