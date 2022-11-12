const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController');

router.get('/tasks', controller.getTodo);

router.post('/tasks/new', controller.saveTodo);

router.get('/tasks/:id', controller.singleTodo);

router.put('/tasks/:id', controller.updateTodo);

router.delete('/tasks/:id', controller.deleteTodo);

module.exports = router;
