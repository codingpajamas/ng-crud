module.exports = function (app) {
    app.use('/', require('./home'));
    app.use('/tasks', require('./tasks'));
};