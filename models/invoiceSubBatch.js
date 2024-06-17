var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var invoiceSubBatchSchema = new Schema({
   
 
    item: {type: String, required: true},
     
    code: {type: String, required: true},
    qty: {type: Number, required: true},
    price: {type: Number, required: true},
    total:{type:Number,required:true},
    balance:{type:Number,required:true},
    invoiceAmount:{type:Number},
    companyName: {type: String, required: true},
    companyEmail: {type: String, required: true},
    companyAddress: {type: String, required: true},
    companyMobile: {type: String, required: true},
    companyClerk: {type: String},
    studentName: {type: String},
    studentEmail: {type: String},
    studentAddress: {type: String},
    studentMobile: {type: String},
    studentId: {type: String},
    studentId2: {type: String},
    grade: {type: Number},
    class1: {type: String},
    invoNumber: {type: Number},
    invoiceDescription: {type: String, required: true},
    itemId: {type: String, required: true},
    date: {type: String, required: true},
    month: {type: String, required: true},
    year: {type:Number, required: true},
    status: {type: String, required: true},
    invoiceCode: {type: Number, required: true},
    invoiceId: {type: Number, required: true},
    type: {type: String, required: true},
    term: {type: Number, required: true},
    subtotal: {type: Number,required:true },
    invoiceCodeText: {type: String},
    discount: {type: Number },
    size: {type: Number },
    amountBefore:{type:Number},
  

 
});

module.exports = mongoose.model('InvoiceSubBatch', invoiceSubBatchSchema);