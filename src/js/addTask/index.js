const deadline = require('../deadline');
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

        const $taskContainer = $('<div />').addClass('col s12');
        const $taskCard = $('<div />').addClass('card-panel');
        const $taskCheckbox = $('<input type="checkbox" />').attr('id', taskId);
        const $taskTitle = $('<label />').attr('for', taskId).text(title);
        const $taskDate = $('<p />').addClass('col s12').text(date);

        $taskCard.append($taskCheckbox);
        $taskCard.append($taskTitle);
        $taskCard.append($taskDate);
        $taskContainer.append($taskCard);

        $(this).parent().parent().append($taskContainer);
        $('.form-task').css( "display", "none" );
        task.counter = task.counter + 1;
        $('#title').val("");
        $('#date').val("");
    },
    counter: 0
};

module.exports = task;
