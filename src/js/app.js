const deadline = require('./deadline');
const addTask = require('./addTask');

$(document).ready(addTask.init);
deadline.addDeadline();
