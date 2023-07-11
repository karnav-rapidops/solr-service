module.exports = function makeCheckCollection({
    checkCollectionDb,
})
{
    return async function checkCollection({ collectionName })
    {
        console.log("Check-collection-usecase:", collectionName);
        
        const result = await checkCollectionDb({ collectionName });

        console.log("check-colection-result: ",result);

        return (result) ? (true) : (false)
    }
}