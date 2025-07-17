const TodoModel = require("../model/todo.model");

exports.createTodo = (req, res) => {
    TodoModel.create(); // completing fun
}