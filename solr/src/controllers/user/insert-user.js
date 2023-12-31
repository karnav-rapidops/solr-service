module.exports = function makeInsertUserAction({
    insertUser
}) {
    return async function insertUserAction(req, res) {

        try {
            const documents = req.body;
            const languageName = req.headers.language;

            console.log("insert-user-controller:", languageName);
            
            await insertUser({ documents, languageName });
    
            res.send("User inserted!");

        } catch (error) {
            res.send(error.message)
        }
        
    }
}