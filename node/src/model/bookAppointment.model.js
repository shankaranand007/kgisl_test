const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const config = require('../../config.json');

mongoose.connect(`${config.mongo_client}`);

let client_info = new Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    slot_time: { type: Date },
    message: { type: String },
    slot_id: { type: String, required: true },
    allotment_status: { type: Boolean, default: false },
    payment: { type: Number }
});


// Export the model
module.exports = mongoose.model('clientInfo', client_info);
