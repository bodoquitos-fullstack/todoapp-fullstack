var task = require('../addTask');
const list = {
  init() {
    $('#todo-form').submit(list.addList);
    $('.modal').modal();
  },
  addList(e) {
    e.preventDefault();
    const { value: list} = document.getElementById('list');
    const titulo = $('#list').val();
    

    let todoId = `list-${list.counter + 1}`; 
    const plantilla =
    `<div class="col s12 m5 list">
        <div class="card-panel list">
          ${titulo}
          <hr>

          <a class="smallwaves-effect waves-light btn right">Add</a>
          <a href="#" class="right"><i class="small material-icons">delete</i></a>

        </div>
    </div>`;

    $('#todos').append(plantilla);
    $('#list').val("");
    },
  counter: 0
}

module.exports = list;