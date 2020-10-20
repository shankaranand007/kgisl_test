const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const config = require('../../config.json');

mongoose.connect(`${config.mongo_client}`);

let create_slot = new Schema({
    start_time:{type:Date,required:true},
    end_time:{type:Date,required:true},
    status:{type:Boolean,default:0},
    date_:{type:Date,required:true},
    client_id:{type:String,default:"000000000000000000000000"},
    client_Mobile:{type:String},
    allotment_status:{type:Boolean,default:false},
    section:{type:String},
    consulted_status:{type:String,default:"Not yet"},
    amount:{type:String,default:"0.0"}
},{strict:false});


// Export the model
module.exports = mongoose.model('slot', create_slot);
