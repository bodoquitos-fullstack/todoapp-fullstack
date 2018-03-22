const deadline = require('../deadline');
const task = {
    init() {
      deadline.init();
    },
    formTasks(){
      const templateFormTask =
        `<form class="col s12" class="form-task">
          <div class="row">
            <div class="input-field col s12">
              <textarea id="task" class="materialize-textarea"></textarea>
              <label for="task">Tarea</label>
            </div>
            <input type="date" name="" value="" class="col s6">
          </div>
          <button type="submit" class="waves-effect waves-light btn btn-task">Agregar tarea</button>
        </form>`;
      $(this).next().next().append(templateFormTask);
      $('.btn-task').click(task.addTask);
    },
    addTask(event) {
        event.preventDefault();
        const { value: title } = document.getElementById('task');

        let taskId = `todo-${task.counter + 1}`;

        const $taskContainer = $('<div />').addClass('col s12');
        const $taskCard = $('<div />').addClass('card-panel');
        const $taskCheckbox = $('<input type="checkbox" />').attr('id', taskId);
        const $taskText = $('<label />').attr('for', taskId).text(title);

        $taskCard.append($taskCheckbox);
        $taskCard.append($taskText);
        $taskContainer.append($taskCard);

        $(this).parent().parent().append($taskContainer);
        $('.form-task').css( "display", "none" );
        task.counter = task.counter + 1;
        $('#task').val("");
    },
    counter: 0
};

module.exports = task;
