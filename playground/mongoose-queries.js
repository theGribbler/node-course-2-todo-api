const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var uid = '5a7b39f10f7fd8a90a2862ca';

if (!ObjectID.isValid(uid)) {
  console.log('User ID not valid');
};

User.find({
  _id: uid
}).then((users) => {
  console.log('Users', users);
});

// var id = '5a7cd584004120cb370f415e11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

User.findOne({
  _id: uid
}).then((user) => {
  console.log('User', user);
});
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

User.findOne({
  _id: uid
}).then((user) => {
  console.log('User', user);
});

// Todo.findById(id).then((todo) =>{
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

User.findById(uid).then((user) =>{
  if (!user){
    return console.log('User Id not found');
  }
  console.log('User by Id', user);
}).catch((e) => console.log(e));
