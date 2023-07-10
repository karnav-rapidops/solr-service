module.exports = function makeInsertCollection({
    insertCollectionDb,
})
{
    return async function insertCollection({ collectionName })
    {
        return await insertCollectionDb({ collectionName });
    }
}