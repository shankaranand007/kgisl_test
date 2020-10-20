'use strict';

const express = require('express');
const appointmentControllor = require('../controller/bookAppointment');
const appointment = express.Router();

appointment
    .post('/', appointmentControllor.BookAppointment)
    .get('/list', appointmentControllor.bookingList)



module.exports = appointment;