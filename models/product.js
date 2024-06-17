var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    status:{type:String, required:true},
    type: {type: String, required:true },
    item: { type: String, required:true },
    code: {type: String, required: true},
    account: {type: String, required: true},
    cogs: {type: String},
    assetAccount: {type: String},
    accumulatedDepreciation: {type: Number},
    purchaseDescription: {type:String,},
    qty: {type: Number, required: true},
    cost: {type: Number, required: true},
    price: {type: Number, required: true},
    grossPrice: {type: Number},
    amountsIncludeVat: {type: String},
    purchasedForResale: {type: String},
 
});

module.exports = mongoose.model('Product', schema);