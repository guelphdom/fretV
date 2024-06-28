const mongoose = require('mongoose');


var expenseSchema = new mongoose.Schema({


category:{type:String, required:true},
item:{type:String, required:true},
price:{type:Number, required:true},
term:{type:Number, required:true},
qty:{type:Number, required:true},
date:{type:String, required:true},
totalExpense:{type:Number, required:true},
month:{type:String, required:true},
year:{type:Number, required:true},





})

module.exports = mongoose.model('Expense', expenseSchema);