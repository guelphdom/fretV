const { now } = require('moment');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var voucherSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:'User'},
    date: {type: Date, default:Date.now},
    mdate:{type:String,required:true},
    date2:{type:String,required:true},
   amount: {type: Number, required: true},
   description:{type:String, required:true},
    approval: {type: String, required: true},
    paid_status: {type: String, required: true},
    status: {type: String, required: true},
    name:{type:String, required:true},
    email:{type:String, required:true},
    dept:{type:String, required:true},
    bank:{type:String, required:true},
    accountNumber:{type:String, required:true},
    companyId:{type:String},
    justification:{type:String, required:true},
    just_imagename:{type:String, required:true},
    proof:{type:String,required:true},
    payment:{type:String,required:true},
    rec:{type:String,required:true},
    recS:{type:String, required:true},
    rec1:{type:String,required:true},
    rec1S:{type:String,required:true},
    rec2:{type:String, required:true},
    rec2S:{type:String,required:true},
    approvalDate:{type:String, required:true}

  
});


module.exports = mongoose.model('Voucher', voucherSchema);