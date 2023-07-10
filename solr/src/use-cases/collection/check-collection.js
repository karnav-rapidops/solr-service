module.exports = function makeCheckCollection({
    checkCollectionDb,
})
{
    return async function checkCollection({ collectionName })
    {
        const result = await checkCollectionDb({ collectionName });

        return (result) ? (true) : (false)
    }
}