const{ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id:'5a528483a790ab8e29597464'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a528483a790ab8e29597464').then((todo) =>{
    console.log(todo);
    console.log(`You deleted the following text: ${todo.text}`);
});

