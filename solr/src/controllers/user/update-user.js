module.exports = function makeUpdateUserAction({
    updateUser,
})
{
    return async function updateUserAction(req, res)
    {
        try {
            const usersToUpdate = req.body;
            const languageName = req.headers.language;

            await updateUser({ usersToUpdate, languageName });
    
            res.send("User updated!");
            
        } catch (error) {
            res.status(error.httpStatusCode).send(error.message)
        }
        
    }
}