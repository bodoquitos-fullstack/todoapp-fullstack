const deadline = {
    init() {
        $('input[type="date"]').change(deadline.addDeadline)
    },
    addDeadline() {
        console.log('deadline module');
    }
}

module.exports = deadline;