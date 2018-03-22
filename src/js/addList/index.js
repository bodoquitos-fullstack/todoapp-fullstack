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
              ${title}
              <hr>
              <a class="small waves-effect waves-light btn right modal-trigger" href="#modal1">Add</a>
              <a href="#" class="right"><i class="small material-icons">delete</i></a>
              <div id="${containerTasksId}" class="row"></div>
            </div>
        </div>`;

    $('#todos').prepend(plantilla);

    list.counter = list.counter + 1;
    $("#list").val("");
  },
  counter: 0
}

module.exports = list;
