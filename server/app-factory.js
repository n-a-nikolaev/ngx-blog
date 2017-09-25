const express = require('express');
const bodyParser = require('body-parser');
const RouterFilter = require('./router-filter');
const AuthRoutes = require('./routes/auth.route');

function createExpressApp(database) {
    const app = express();

    app.use(bodyParser.json());
    app.use('/api', RouterFilter());
    app.use('/api', AuthRoutes(database));
    return app;
}

module.exports = createExpressApp;