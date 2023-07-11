const collectionTable = 'language';

module.exports = function makeCollectionDb({
    pool,
    databaseError,
}) {
    return Object.freeze({
        checkCollection,
        insertCollection,
    })

    async function checkCollection({ collectionName })
    {

        try {
            console.log("check-collection-db:", collectionName);

            const result = await pool.query(`SELECT * FROM ${collectionTable} WHERE name = $1`, [collectionName]);

            console.log(result.rows);

            return result?.rows?.length;

        } catch (error) {
            console.error(error.message);
            throw new databaseError(error.message);
        }
    }
    async function insertCollection({ collectionName })
    {
        try {
            console.log("Insert-collection-db:", collectionName);

            const result = await pool.query(`INSERT INTO ${collectionTable} (name) VALUES ($1) RETURNING id`, [collectionName]);

            return result?.rows[0]?.id;
            
        } catch (error) {
            console.error(error.message);
            throw new databaseError(error.message); 
        }
    }
}