const Tasks = require('./model.js')
const controller = {};

//CREATE
controller.newTask = (req, res, next) => {
console.log('inside newTask')
const {task} = req.body;

let taskid = Math.floor(100000 + Math.random() * 900000)
Tasks.create({task: task, taskid: taskid})
.then((data) => {
res.locals.newTask = task;
return next();
})
}

//READ
controller.getTask = (req, res, next) => {

}

//UPDATE
controller.updateTask = (req, res, next) => {

}

//DELETE
controller.deleteTask = (req, res, next) => {

}


module.exports = controller;