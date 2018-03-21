//   <!-- <div class="col s12 m5 todo">
//   <div class="card-panel list">
//   Lista 1.
// </label>
// <a class="btn-floating btn-large waves-effect waves-light red" ><i class="material-icons">add</i></a>
// <i class="medium material-icons">delete</i>   
// </div>
// </div>


const addList = {
  init() {
    $('#todo-form').submit(addList.addTodoList);
  },
  addTodoList(e) {
    e.preventDefault();
    const { value: list} = document.getElementById('list');
    console.log('pruena');

    let todoId = `list-${addList.counter + 1}`;
    const plantilla =
    `<div class="col s12 m5 list">
        <div class="card-panel list">
          Lista 1.
          <a class="btn-floating btn-large waves-effect waves-light red" ><i class="material-icons">add</i></a>
          <i class="medium material-icons">delete</i>   
        </div>
    </div>`;

    $('#todos').append(plantilla);
  },
  counter: 0
}

module.exports = addList;