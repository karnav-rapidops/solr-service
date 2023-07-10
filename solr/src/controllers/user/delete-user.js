module.exports = function makeDeleteUserAction({
    deleteUser,
})
{
    return async function deleteUserAction(req, res)
    {
        try {

            const usersToDelete = req.body;
            const languageName = req.headers.language;

            await deleteUser({ usersToDelete, languageName });

            res.send("Users to deleted!");

        } catch (error) {
            res.status(error.httpStatusCode).send(error.message);
        }
        
    }
}