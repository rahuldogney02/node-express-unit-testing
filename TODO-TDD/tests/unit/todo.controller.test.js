const TodoController = require("../../controllers/todo.controller");

describe("TodoController.createTodo",()=>{
    it("should have a creatTodo function", ()=>{
        expect(typeof TodoController.createTodo).toBe("function");
    })
})