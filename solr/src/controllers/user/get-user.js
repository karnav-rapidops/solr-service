module.exports = function makeGetUserAction({
    getUser
})
{
    return async function getUserAction(req, res)
    {   
        try {
            const searchTerm = req.body.searchTerm;
            const fieldsToGet = req.body.fieldsToGet;
            const languageName = req.headers.language;

            const userDetails = await getUser({ searchTerm, fieldsToGet, languageName });

            res.status(200).send(userDetails);
            
        } catch (error) {
            res.status(error.httpStatusCode).send(error.message);
        }
        
    }
}