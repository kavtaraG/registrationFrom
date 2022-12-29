const mongoClient = require('mongodb').mongoClient;
const assert = require('assert');
const ObjectId = require('mongodb').ObjectId;

const dotenv = require('dotenv');
const { GridFSBucket } = require('mongodb');

dotenv.config({path: '/process.env'});

const dbName = process.env.DB_NAME;
const url = process.env.DB_URI;

const getUsers = function (){
    return new Promise((resolve, reject) => {
        mongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, 
          function(err, client) {
            assert.equal(null, err);
            const db = client.db(dbName);
            db.collection('form').find().toArray((err, result) => {
                if(err) throw err;
                client.close();
                resolve(result);
            });
          });
    });
};

const addUsers = function(){
   return new Promise((resolve, reject) => {
    mongoClient.connect(dbName, {useNewUrlParser: true, useUnifiedTopology: true,
    function(err, client){
        assert.equal(null, err);
        const db = client.db(dbName);
        db.connect('form').find().toArray((err, result) => {
            if(err) throw err;
            client.close();
            resolve(result);
        });
    }});
   });
};

module.exports = {getUsers, addUsers};