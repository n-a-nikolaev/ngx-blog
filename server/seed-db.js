require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');
const test = require('assert');

const users = require('./mock/users');

/**
 * @name hashUsersPassword
 * @description Iterate through users array, 
 *  check if user has password and hash it.
 * 
 * @param {Array<any>} users - array of users
 * @returns {Array<any>} - users array with hashed passwords
 */
function hashUsersPassword(users) {
    var usersCopy = users.slice(0);
    usersCopy.forEach(user => {
        if (user.password) {
            user.password = bcrypt.hashSync(user.password, 10);
        }
    });

    return usersCopy;
}

/**
 * @name seedCollection
 * @description Insert dummy records in our database
 * 
 * @param {string} collectionName - name of the collection, we want to insert records
 * @param {Array<any>} collectionData - data we want to insert
 */
function seedCollection(collectionName, collectionData) {
    MongoClient.connect(process.env.DB_CONN, (err, db) => {
        test.equal(null, err);

        console.log('connected to mongodb...');

        const collection = db.collection(collectionName);
        collection.remove();

        collection.insertMany(hashUsersPassword(collectionData), (err, results) => {
            test.equal(null, err);
            console.log(`${results.insertedCount} records inserted.`);
            console.log('closing db connection...');
            db.close();
        });
    });
}

seedCollection('users', users);