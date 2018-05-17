// const mc = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/utbl', (err, clint) =>{
    if (err){
        console.log("unable to connecte to mongo db server");
    }else{
    console.log("connected to mongo db server");
    }

    // const db = clint.db('utbl');




    // db.collection('utbl').insertOne({
    //     name: "name5",
    //     city:"city5",
    //     completed:false
    // },(err, result) =>{
    //     if (err) {
    //         return console.log("unable to insert in utbl")
    //     } else {
    //         console.log(JSON.stringify(result.ops, undefined, 2))            
    //     }
    // });

    // db.collection('Users').insertOne({
        
    //     name:"amit",
    //     age:25,
    //     city:"bpl"
    // }, (err, res) =>{
    //     if (err) {
    //         return console.log("unable to insert in utbl")
    //     } else {
    //         console.log(JSON.stringify(res.ops[0]._id.getTimestamp()));
    //     }
    // })




    clint.close();
});
