let Tasks = require('../models/tasks');

//index
exports.getTodo = async (req, res, next) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).send(tasks);
  } catch (err) {
    next(err);
  }
};

// add task
exports.saveTodo = async (req, res, next) => {
  try {
    const newTask = new Tasks(req.body);
    await newTask.save();
    res.status(200).send(newTask);
  } catch (err) {
    next(err);
  }
};

//find task
exports.singleTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundID = await Tasks.findById(id);
    if (!foundID) {
      throw new Error('Task Does Not Exist', 404);
    }
    res.send(foundID);
  } catch (err) {
    next(err);
  }
};

//update todo
exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const postTask = await Tasks.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.send(postTask);
  } catch (err) {
    next(err);
  }
};

//delete task
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    Tasks = await Tasks.findByIdAndDelete(id);
    if (!Tasks) return res.status(404).json({ message: 'task does not exist' });
    res.status(200).send('task deleted');
  } catch (err) {
    console.error(err.message);
  }
};
