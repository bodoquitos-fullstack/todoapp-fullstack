const deadline = require('./deadline');
const addTask = require('./addTask');
const addList = require('./addList');

const loadPage = () => {
    $('.modal').modal();
    addList.init();
}

$(document).ready(loadPage);

