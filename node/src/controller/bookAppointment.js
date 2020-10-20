'use strict';
var async = require('async');
const util = require("util");
const output = require('../helper/api');
const bookAppointment = require('../model/bookAppointment.model');
const slot = require('../model/createSlot.model');
const moment = require('moment');


class AppointmentController {
    constructor(con) {
        this.config = con;
    }

    test(req, res, callback) {
        console.log("test")
        return "dt"
    }
    bookingList(req, res) {

        bookAppointment.find()
            .exec((err, data) => {
                if (err) (output.invalid(req, res, err))
                else (output.ok(req, res, data, "created", 0))
            })
    }
    BookAppointment(req, res) {
        try {
            new Promise((resolve, reject) => {
                async.parallel({
                    book_client: (callback) => {
                        req.body['allotment_status'] = true;
                        let book_ = new bookAppointment(req.body)
                        book_.save((err, data) => {
                            if (err) callback(err, [])
                            else callback(null, data)
                        })
                    },
                    update_doctor: (callback) => {
                        slot.findByIdAndUpdate({ _id: req.body.slot_id }, {
                            $set: {
                                client_id: req.params.client_id,
                                client_name: (req.body.name) ? req.body.name : '0000000000',
                                client_Mobile: (req.body.mobile) ? req.body.mobile : '0000000000',
                                allotment_status: true
                            }
                        })
                            .exec((err, data) => {
                                if (err) callback(err, [])
                                else callback(null, data)
                            })
                    }
                }, (err, data) => {
                    if (err) reject(output.invalid(req, res, err))
                    else resolve(output.ok(req, res, data, "created", 0))
                });
            })
        } catch (ex) { output.serverError(req, res, ex) }
    }
}


module.exports = new AppointmentController();