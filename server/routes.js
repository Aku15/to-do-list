const express = require('express');
const router = express.Router();
const controller = require('./controller.js')


router.post('/newtask',controller.newTask, (req, res) => {
    console.log(res.locals.newTask)
    res.status(200).json(res.locals.newTask)
})

module.exports = router