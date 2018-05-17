// const mc = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/utbl', (err, clint) =>{
    if (err){
        console.log("unable to connecte to mongo db server");
    }else{
    console.log("connected to mongo db server");
    }

    const db = clint.db('utbl');

    db.collection('Users').find().count().then((count) =>{
        console.log(`Users count ${count} `);
        // console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log("unable to fetch utbl")
    } ) ;

    clint.close();
});
