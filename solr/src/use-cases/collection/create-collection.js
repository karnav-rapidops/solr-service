module.exports = function makeCreateCollection({
    axios,
    Joi,
    validationError,
}) {
    return async function createCollection({ collectionName, numShards, replicationFactor })
    {
        const url = 'http://localhost:8983/api/collections';

        const data = {
            create: {
            name: collectionName,
            numShards: numShards,
            replicationFactor: replicationFactor,
        },
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        try {
            const response = await axios.post(url, data, { headers });
            console.log(`Collection ${collectionName} created successfully.`);
            console.log(response.data); 
        } catch (error) {
            console.error('Error creating Solr collection:', error.response.data);
        }

    }

    function validateInputData({ collectionName, numShards, replicationFactor }) {

        console.log("in val fun : ", collectionName);

        const schema = Joi.object({
            collectionName: Joi.string().required(),
            numShards: Joi.number().integer().min(1).required(),
            replicationFactor: Joi.number().integer().min(1).required()

        });
        const { error } = schema.validate({ collectionName, numShards, replicationFactor });
        
        if (error) {
            throw new validationError(error.message);
        }
    }
}