const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    // username: {type: String, required: true, unique: true},
    // password: {type: String, required: true},
    //taskList = [{taskName: Swimming, status: not completed, taskid = 0 (can use indicies to assign taskid)}]
    task: {type: String, required: true},
    status: {type: String, default: "uncompleted"},
    taskid : {type: Number, required: true}

})

module.exports = mongoose.model('Tasks', taskSchema)