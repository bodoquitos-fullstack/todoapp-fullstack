const deadline = require('../deadline');
const delate = require('../remove');
const task = {
    init() {
      deadline.init();
    },
    formTasks() {
      const templateFormTask =
        `<form class="col s12" class="form-task">
          <div class="row">
            <div class="input-field col s12">
              <textarea id="title" class="materialize-textarea"></textarea>
              <label for="title">Tarea</label>
            </div>
            <input id="date" type="date" name="" value="" class="col s6">
          </div>
          <button type="submit" class="waves-effect waves-light btn btn-task">Agregar tarea</button>
        </form>`;
      $(this).next().next().html(templateFormTask);
      $('.btn-task').click(task.addTask);
    },
    addTask(event) {
        event.preventDefault();
        const { value: title } = document.getElementById('title');
        const { value: date } = document.getElementById('date');

        let taskId = `todo-${task.counter + 1}`;

        const templateTask =
          `<div class="col s12">
            <div class="card-panel">
              <div>
                <p class="delate-task">X</p>
                <input type="checkbox" id="${taskId}">
                <label for="${taskId}">${title}</label>
                <p>${date}</p>
              </div>
            </div>
          </div>`;

        $(this).parent().parent().append(templateTask);
        $('.delate-task').click(delate);
        task.counter = task.counter + 1;
        $('#title').val("");
        $('#date').val("");
    },
    counter: 0
};

module.exports = task;
