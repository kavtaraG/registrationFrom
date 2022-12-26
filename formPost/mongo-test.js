const mongoClient = require('mongodb').mongoClient;
const dotenv = require('dotenv');

dotenv.config({path: '/process.env'});

// mongoClient.connect(DB_URI, (err, promise) => {
//     if(err) throw err;
//     const db = client.db(DB_NAME);

//     db.collection(COL_NAME).find().toArray((err, result) => {
//         if(err) throw err;

//         console.log(result);
//     })
// });

const mongoDB = async () => {
    try{
        const conn = await mongoClient.connect(DB_URI, () => {
            const db = client.db(DB_NAME);
            db.collection(COL_NAME).find().toArray(); 
        });
        console.log(`Connected to mongo DB: ${conn}`);
    }catch(err){
        if(err) throw err;
        console.log(err);
    }
    
}

module.exports = mongoDB;