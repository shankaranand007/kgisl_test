'use strict';
module.exports = function (app) {
    app.use('/api/slot', require('./routes.createSlot'))
    app.use('/api/reserve', require('./routes.Appointment'))
};
