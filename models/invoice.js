var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var invoiceSchema = new Schema({
   
 
    item: {type: String, required: true},
    qty: {type: Number, required: true},
    price: {type: Number, required: true},
    total:{type:Number,required:true},
    companyName: {type: String, required: true},
    companyEmail: {type: String, required: true},
    companyClerk: {type: String, required: true},
    clientName: {type: String, required: true},
    clientEmail: {type: String, required: true},
    invoiceDescription: {type: String, required: true},
    itemId: {type: String, required: true},
    date: {type: String, required: true},
    month: {type: String, required: true},
    year: {type: Number, required: true},
    notes: {type: String, required: true},


 
});

module.exports = mongoose.model('Invoice', invoiceSchema);