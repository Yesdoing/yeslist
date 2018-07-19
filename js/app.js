import ToDo from "./ToDo";

document.addEventListener("DOMContentLoaded", function(e) {});

function intialize() {
  let todos = [];

  let a = new ToDo("1번할일", new Date(), new Date(), false);
  todos.unshift(a);
  let b = new ToDo("2번할일", new Date(), new Date(), false);
  todos.unshift(b);
  let c = new ToDo("3번할일", new Date(), new Date(), false);
  todos.unshift(c);
  todos.unshift(new ToDo("4번할일", new Date(), new Date(), false));

  const ul = document.querySelector("ul");
  const form = document.querySelector("form");
  const btn = document.querySelector("button");
  const text = document.querySelector("input");

  todos.forEach(value => {
    let li = document.createElement("li");
    li.textContent = value.todo;
    ul.appendChild(li);
  });

  document.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
      let str = text.value;
      let todoItem = new ToDo(str, new Date(), new Date(), false);
      todos.unshift(todoItem);
      createTodoItem(todoItem);
      text.value = "";
    }
  });

  function createTodoItem(todoItem) {
    let li = document.createElement("li");
    li.textContent = todoItem.todo;
    ul.appendChild(li);
  }
}

intialize();
