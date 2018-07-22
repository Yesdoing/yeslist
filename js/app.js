import { ToDo } from "./ToDo.js";

document.addEventListener("DOMContentLoaded", function(e) {
  const itemInput = document.querySelector(".additem__input");
  let todos = [];

  itemInput.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
      let date = new Date();
      let str = e.target.value;
      if (str === "") {
        return;
      }
      let todoItem = new ToDo(str, date.getTime(), date.getTime(), false);
      todos.unshift(todoItem);
      createTodoItem(str);
      e.target.value = "";
    }
  });

  function createTodoItem(todoItem) {
    let ul = document.querySelector(".todolist-items");

    let li = document.createElement("li");
    li.setAttribute("class", "todolist-item");
    let div = document.createElement("div");
    div.setAttribute("class", "todolist-item-info");
    let aInfo = document.createElement("a");
    aInfo.setAttribute("href", "#");
    aInfo.setAttribute("class", "todolsit-item-check");
    let iSquare = document.createElement("i");
    iSquare.setAttribute("class", "far fa-square");
    let span = document.createElement("span");
    span.setAttribute("class", "todolist-item-todoname");
    let text = document.createTextNode(todoItem);
    span.appendChild(text);
    let aStar = document.createElement("a");
    aStar.setAttribute("href", "#");
    aStar.setAttribute("class", "todolist-item-star");
    let iStar = document.createElement("i");
    iStar.setAttribute("class", "far fa-star");

    aInfo.appendChild(iSquare);
    aStar.appendChild(iStar);

    div.appendChild(aInfo);
    div.appendChild(span);

    li.appendChild(div);
    li.appendChild(aStar);

    ul.insertBefore(li, ul.childNodes[0]);
  }

  class ToDo {
    constructor(todo, startDate, endDate, checked) {
      Object.assign(this, { todo, startDate, endDate, checked });
    }

    get todo() {
      return this._todo;
    }

    set todo(value) {
      this._todo = value;
    }

    get startDate() {
      return this._startDate;
    }

    set startDate(value) {
      this._startDAte = value;
    }

    get endDate() {
      return this._endDate;
    }

    set endDate(value) {
      this._endDate = value;
    }

    get checked() {
      return this._checked;
    }

    set checked(value) {
      this._checked = value;
    }
  }
});
