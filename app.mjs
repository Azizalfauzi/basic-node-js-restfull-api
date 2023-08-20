import http from "http";
import { TodoListSerice } from "./todolist-service.mjs";

const service = new TodoListSerice();
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    service.getTodoList(req, res);
  } else if (req.method === "POST") {
    res.setHeader("Content-Type", "application/json");
    service.createTodoList(req, res);
  } else if (req.method === "PUT") {
    res.setHeader("Content-Type", "application/json");
    service.updateTodoList(req, res);
  } else if (req.method === "DELETE") {
    res.setHeader("Content-Type", "application/json");
    service.deleteTodoList(req, res);
  }
});

server.listen(3000);
