var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSubSchema = new Schema({
   
 
    item: {type: String, required: true},
    qty: {type: Number, required: true},
    price: {type: Number, required: true},
    total:{type:Number,required:true},
    companyName: {type: String, required: true},
    companyEmail: {type: String, required: true},
    companyCity: {type: String, required: true},
    companyAddress: {type: String, required: true},
    companyMobile: {type: String, required: true},
    companyClerk: {type: String},
    clientName: {type: String, required: true},
    clientEmail: {type: String, required: true},
    clientAddress: {type: String, required: true},
    clientCity: {type: String, required: true},
    clientMobile: {type: String, required: true},
    invoiceDescription: {type: String, required: true},
    itemId: {type: String, required: true},
    date: {type: String, required: true},
    month: {type: String, required: true},
    year: {type:Number, required: true},
    status: {type: String, required: true},
    code: {type: String, required: true},
    subtotal: {type: Number, },
    size: {type: Number, }
  

 
});

module.exports = mongoose.model('QuoteSub', quoteSubSchema);