const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  try {
    const todos = await ToDoModel.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.saveToDo = async (req, res) => {
  const { text, description, dueDate } = req.body;

  try {
    ToDoModel.create({ text, description, dueDate }).then((data) => {
      res.json({ message: "ToDo saved successfully", data });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.updateToDo = async (req, res) => {
  const { _id } = req.params;
  const { text, description, dueDate } = req.body;

  try {
    ToDoModel.findByIdAndUpdate(
      _id,
      { text, description, dueDate },
      { new: true }
    ).then((data) => {
      res.json({ message: "ToDo updated successfully", data });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.params;

  try {
    ToDoModel.findByIdAndDelete(_id).then((data) => {
      res.json({ message: "ToDo deleted successfully", data });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.getToDoById = async (req, res) => {
    const { _id } = req.params;
    
    try {
        ToDoModel.findById(_id).then((data) => {
        res.json(data);
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
