const router = require('../api-router').getInstance();
const test = require('assert');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const AuthRoutes = function (database) {
    router.post('/auth', (req, res) => {
        const user = req.body;
        console.log('Trying to login with user: %s' , JSON.stringify(user));
        database.collection('users', { strict: true }, (err, collection) => {
            test.equal(null, err);

            collection.findOne({ username: user.username }, (err, result) => {
                if (!result) {
                    console.log('User with username %s not found', user.username);
                    return res.status(404).json({ error: 'User not found' });
                }
                if (!bcrypt.compareSync(user.password, result.password)) {
                    console.log('User or password do not match');
                    return res.status(401).json({ error: 'User or password do not match' });
                }

                const payload = {
                    username: result.username,
                    admin: result.admin
                };

                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3h' });
                console.log('User with username %s authenticated', user.username);
                return res.json({
                    message: 'Successfuly authenticated',
                    token: token
                });
            });
        });
    });

    return router;
};

module.exports = AuthRoutes;