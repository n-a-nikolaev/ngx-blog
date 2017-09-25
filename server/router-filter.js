const router = require('./api-router').getInstance();
const expressJWT = require('express-jwt');

const RouterFilter = function () {
    router.use(expressJWT({ secret: process.env.JWT_SECRET })
        .unless({ path: '/api/auth' }));

    router.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(401).send({
                error: err.message
            });
            return;
        }
        next();
    });
    return router;
};

module.exports = RouterFilter;
