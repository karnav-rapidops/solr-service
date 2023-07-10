const userCollection = 'user';

module.exports = function makeUserDbMethods({
    axios,
    databaseError,
}) {
    return Object.freeze({
        insertUser,
        getUser,
        updateUser,
        deleteUser,
    })

    async function insertUser({ documents, languageName }) {
        try {
            await axios.post(`http://localhost:8983/solr/${languageName}/update?commit=true`, documents,
                {
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                })
            return

        } catch (error) {
            console.log(error);
            throw new databaseError(error.message);
        }
    }

    async function getUser({ searchTerm, fieldsToGet, languageName }) {
        const params = {
            q: searchTerm,
            rows: 10,
            fl: fieldsToGet.join(',')
        }

        try {
            const result = await axios.get(`http://localhost:8983/solr/${languageName}/select`, { params })

            return result?.data?.response?.docs

        } catch (error) {
            console.log(error);
            throw new databaseError(error.message);
        }
    }

    async function updateUser({ usersToUpdate, languageName }) {
        console.log("In db: ", usersToUpdate);
        try {
            const result = await axios.post(`http://localhost:8983/solr/${languageName}/update?commit=true`, usersToUpdate,
                {
                    'headers': {
                        'Content-Type': 'application/json'
                    }
                })
            console.log("result: ", result.data);
            return;

        } catch (error) {
            console.log(error);
            throw new databaseError(error.message);
        }
    }
    async function deleteUser({ usersToDelete, languageName }) {
        try {

            await axios.post(`http://localhost:8983/solr/${languageName}/update?commit=true`, usersToDelete, {
                'headers': {
                    'Content-Type': 'application/json'
                }
            })

        } catch (error) {
            console.log(error);
            throw new databaseError(error.message);
        }
    }
}
