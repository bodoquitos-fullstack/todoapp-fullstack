var task = require('../addTask');
const list = {
  init() {
    task.init();
    $('#todo-form').submit(list.addList);
    $('.modal').modal();
  },
  addList(e) {
    e.preventDefault();
    const { value: list} = document.getElementById('list');
    const titulo = $('#list').val();


    let todoId = `list-${list.counter + 1}`;
    const plantilla =
    `<div class="col s12 m6 list">
        <div class="card-panel card">
          ${titulo}
          <hr>

          <a class="small waves-effect waves-light btn right modal-trigger" href="#modal1">Add</a>
          <a href="#" class="right"><i class="small material-icons">delete</i></a>
          <div id="tasks" class="row"></div>
        </div>
    </div>`;
// comentario
    $('#todos').append(plantilla);
    $('#list').val("");
    },
  counter: 0
}

module.exports = list;
