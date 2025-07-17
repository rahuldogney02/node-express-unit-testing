const TodoController = require("../../controllers/todo.controller");
const TodoModel = require("../../model/todo.model");
const httpMock = require("node-mocks-http");
const newTodoData = require("../mock-data/new-todo.json");

// mock on TodoModel
TodoModel.create = jest.fn();


describe("TodoController.createTodo",()=>{
    it("should have a creatTodo function", ()=>{
        expect(typeof TodoController.createTodo).toBe("function");
    })
    it("should call TodoModel.create",()=>{
        let req, res, next;
        req = httpMock.createRequest();
        res = httpMock.createResponse();
        next = null;
        req.body = newTodoData;
        TodoController.createTodo(req,res,next);
        // expect(TodoModel.create).toBeCalled();
        expect(TodoModel.create).toBeCalledWith(newTodoData);
    })
})