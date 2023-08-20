export class TodoListSerice {
  todoList = ["Aziz", "Alfauzi"];

  getJsonTodoList() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todoList.map((value, index) => {
        return {
          id: index,
          todo: value,
        };
      }),
    });
  }

  getTodoList(req, res) {
    res.write(this.getJsonTodoList());
    res.end();
  }

  createTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      this.todoList.push(body.todo);

      res.write(this.getJsonTodoList());
      res.end();
    });
  }

  updateTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todoList[body.id]) {
        this.todoList[body.id] = body.todo;
      }

      res.write(this.getJsonTodoList());
      res.end();
    });
  }

  deleteTodoList(req, res) {
    req.addListener("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todoList[body.id]) {
        this.todoList.splice(body.id, 1);
      }

      res.write(this.getJsonTodoList());
      res.end();
    });
  }
}
