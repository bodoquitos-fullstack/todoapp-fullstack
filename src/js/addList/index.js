var task = require('../addTask');
const addList = {
  init() {
    $('#todo-form').submit(addList.addTodoList);
  },
  addTodoList(e) {
    e.preventDefault();
    const { value: list} = document.getElementById('list');
    const titulo = $('#list').val();
    

    let todoId = `list-${addList.counter + 1}`; 
    const plantilla =
    `<div class="col s12 m5 list">
        <div class="card-panel list">
          ${titulo}
          <hr>
          <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
          <a href="modal1"><i class="medium material-icons">delete</i></a>
        </div>
    </div>`;

    $('#todos').append(plantilla);
    $('#list').val("");
    },
  counter: 0
}

module.exports = addList;