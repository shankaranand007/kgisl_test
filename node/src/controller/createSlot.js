'use strict';
var async = require('async');
const util = require("util");
const output = require('../helper/api');
const createSlot = require('../model/createSlot.model');
const moment = require('moment');




class SlotController {
    constructor(con) {
        this.config = con;
    }

    test(req, res, callback) {
        console.log("test")
        return "dt"
    }
    createSlot(req, res) {
        try {
            new Promise((resolve, reject) => {
                let slot = new createSlot(req.body);
                slot.save((err, data) => {
                    if (err) reject(output.invalid(req, res, err))
                    else resolve(output.ok(req, res, data, "created", 0))
                })
            });

        } catch (ex) { output.serverError(req, res, ex) }
    }

    getAllSlotList(req, res) {
        try {
            new Promise((resolve, reject) => {
                createSlot.find({}, (err, data) => {
                    if (err) reject(output.invalid(req, res, err))
                    else resolve(output.ok(req, res, data, "created", 0))
                })
            });

        } catch (ex) { output.serverError(req, res, ex) }
    }

    // 0 => all || 1 => allotted || 2 => availabe

    getSlot(req, res) {
        try {

            new Promise((resolve, reject) => {

                console.log("called", req.params.selectedDate)

                const start = moment.utc(req.params.selectedDate).format('YYYY-MM-DD 00:00:00');
                const end = moment.utc(req.params.selectedDate).format('YYYY-MM-DD 23:59:59');

                let date = {
                    $gte: start,
                    $lte: end
                }

                let query = {}
                if (req.params.option == "0" || req.params.option == 0) {
                    query['date_'] = date
                } else if (req.params.option == "1" || req.params.option == 1) {
                    query['$and'] = [{ date_: date }, { allotment_status: true }]
                } else if (req.params.option == "2" || req.params.option == 2) {
                    query['$and'] = [{ date_: date }, { allotment_status: false }]

                }

                // createSlot.aggregate([{$match:query},
                //     { "$addFields": { "clientID": "$client_Mobile" } },
                //     {$lookup:{from:"clientInfos" , localField:"clientID",foreignField:"mobile",as:"clientInfo"}}]
                //     )
                createSlot.find(query)
                    .exec((err, data) => {
                        if (err) reject(output.invalid(req, res, err))
                        else resolve(output.ok(req, res, data, "list", 0))
                    })
            });

        } catch (ex) { output.serverError(req, res, ex) }
    }

    deleteSlot(req, res) {
        createSlot.findByIdAndRemove({ _id: req.params.id })
            .exec((err, data) => {
                if (err) output.invalid(req, res, err)
                else output.ok(req, res, data, "list", 0)
            })
    }

    checkAvailablity(req, res) {
        try {

            new Promise((resolve, reject) => {
                console.log()
                const start = moment.utc(req.params.start_section);
                const end = moment.utc(req.params.end_section);
                createSlot.find({
                    $and: [{ start_time: { $gte: start } }, { end_time: { $lte: end } }]
                })
                    .count()
                    .exec((err, data) => {
                        if (err) reject(output.invalid(req, res, err))
                        else
                            if (data) {
                                resolve(output.ok(req, res, data, "already created", 1))
                            } else {
                                resolve(output.ok(req, res, data, "Not Created", 0))
                            }

                    })
            });

        } catch (ex) { output.serverError(req, res, ex) }
    }
}


module.exports = new SlotController();