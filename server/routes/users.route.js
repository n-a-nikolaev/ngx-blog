const router = require('../api-router').getInstance();
const test = require('assert');

const UserRoutes = function (database) {

    router.get('/users', (req, res) => {
        database.collection('users', { strict: true }, (err, collection) => {
            test.equal(null, err);
            const result = collection.find().toArray();

            return res.json({
                results: result
            });
        });
    });

    return router;
};

module.exports = UserRoutes;