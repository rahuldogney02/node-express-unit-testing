const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../model/todo.model");

// mock on TodoModel
TodoModel.create = jest.fn();


describe("TodoController.createTodo",()=>{
    it("should have a creatTodo function", ()=>{
        expect(typeof TodoController.createTodo).toBe("function");
    })
    it("should call TodoModel.create",()=>{
        TodoController.createTodo();
        expect(TodoModel.create).toBeCalled();
    })
})