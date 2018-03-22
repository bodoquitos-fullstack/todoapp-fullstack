var task = require('../addTask');
const list = {
  init() {
    task.init();
    $('#todo-form').submit(list.addList);
    $('.modal').modal();
  },
  addList(e) {
    e.preventDefault();
    const { value: title} = document.getElementById('list');

    let todoId = `list-${list.counter + 1}`;
    let containerTasksId = `tasks-${list.counter + 1}`;

    const plantilla =
        `<div class="col s12 m6 list" id="${todoId}">
            <div class="card-panel card">
              <h1>${title}</h1>
              <hr>
              <a class="small waves-effect waves-light btn right form-tasks">Add</a>
              <a href="#" class="right"><i class="small material-icons">delete</i></a>
              <div id="${containerTasksId}" class="row"></div>
            </div>
        </div>`;

    $('#todos').prepend(plantilla);
    $('.form-tasks').click(task.formTasks);
    list.counter = list.counter + 1;
    $("#list").val("");
  },
  counter: 0
}

module.exports = list;
