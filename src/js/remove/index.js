const delate = (event) => {
    $(event.target).parent().parent().parent().remove();
};

module.exports = delate;