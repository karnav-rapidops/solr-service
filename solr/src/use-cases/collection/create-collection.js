module.exports = function makeCreateCollection({
    axios,
    Joi,
    validationError,
}) {
    return async function createCollection({ collectionName, numShards, replicationFactor })
    {
        const url = 'http://localhost:8983/solr/admin/collections';

        validateInputData(collectionName, numShards, replicationFactor);

        const data = {
            action: 'CREATE',
            name: collectionName,
            numShards: numShards,
            replicationFactor: replicationFactor,
        };

        try {
            await axios.post(url, data);
            console.log(`Collection ${collectionName} created successfully.`);
            
        } catch (error) {
            console.error('Error creating Solr collection:', error);
        }
    }

    function validateInputData({ collectionName, numShards, replicationFactor }) {

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