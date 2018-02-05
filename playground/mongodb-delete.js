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

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //deleteOne - deletes the first it sees

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // });

     // db.collection('Users').deleteMany({name: 'Paul'}).then((result) => {
     //   console.log(result);
     // });

     db.collection('Users').findOneAndDelete({
       _id: new ObjectId("5a74d6b3b1d2fc0592212304")
     }).then((result) =>{
       console.log(JSON.stringify(result, undefined, 2));
     });

    //db.close();
});
