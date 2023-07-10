const collectionTable = 'language';

module.exports = function makeCollectionDb({
    pool,
    databaseError,
}) {
    return Object.freeze({
        checkCollection,
    })

    async function checkCollection({ collectionName })
    {
        try {
            
            const result = await pool.query(`SELECT FROM ${collectionTable} WHERE name = $1`, [collectionName]);

            return result?.rows[0]?.length;

        } catch (error) {
            throw new databaseError(error.message);
        }
    }
}