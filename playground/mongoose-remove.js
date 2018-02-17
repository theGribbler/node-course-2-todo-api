const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//removes all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5a882a6e30b0cdc53e3585d5'}).then((todo) => {

});


Todo.findByIdAndRemove('5a882a6e30b0cdc53e3585d5').then((todo) => {
  console.log(todo);
});
