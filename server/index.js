require('dotenv').config();
const test = require('assert');
const MongoClient = require('mongodb').MongoClient;
const port = 3000;
const AppFactory = require('./app-factory');

MongoClient.connect(process.env.DB_CONN, (err, db) => {
    test.equal(null, err);

    AppFactory(db)
        .listen(port, () => {
            console.log(`listening on port: ${port}`);
        });
});