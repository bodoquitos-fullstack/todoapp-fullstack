const addTask = {
    init() {
      $('.modal').modal();
      $('#form-task').submit(addTask.task);
        // modal llama evento de crear tarea
    },
    task(event) {
        event.preventDefault();
        const { value: task } = document.getElementById('task');

        let taskId = `todo-${addTask.counter + 1}`;

        const $taskContainer = $('<div />').addClass('col s12 m6');
        const $taskCard = $('<div />').addClass('card-panel');
        const $taskCheckbox = $('<input type="checkbox" />').attr('id', taskId);
        const $taskText = $('<label />').attr('for', taskId).text(task);

        $taskCard.append($taskCheckbox);
        $taskCard.append($taskText);
        $taskContainer.append($taskCard);

        $('#tasks').append($taskContainer);

        addTask.counter = addTask.counter + 1;
        $('#task').val("");
    },
    counter: 0
};

module.exports = addTask;
