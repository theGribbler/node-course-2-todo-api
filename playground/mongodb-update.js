//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Paul', age: 44};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("unable to connect to MongoDB server");
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectId('5a787e3b672c6020755995ae')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5a74d3af03dd8b04af482506')
    }, {
      $set: {
        name: "Pauly"
      },
        $inc: { //you can execute multiple operations
          age: 1
          }
      }, {
        returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    // db.collection('Users').findOneAndUpdate({
    //   _id: new ObjectId('5a74d6b9014f1105935b7b14')
    // }, {
    //   $inc: {
    //     age: -2
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    //db.close();
});
