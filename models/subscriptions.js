const mongoose = require('mongoose');


var subSchema = new mongoose.Schema({


startup:{type:Number, required:true},
startupDuration:{type:Number, required:true},
startupCount:{type:Number, required:true},
advanced:{type:Number, required:true},
advancedDuration:{type:Number, required:true},
advancedCount:{type:Number, required:true},
enterprise:{type:Number, required:true},
enterpriseDuration:{type:Number, required:true},
enterpriseCount:{type:Number, required:true},
startupA:{type:Number, required:true},
startupAduration:{type:Number, required:true},
advancedA:{type:Number, required:true},
advancedAduration:{type:Number, required:true},
enterpriseA:{type:Number, required:true},
enterpriseAduration:{type:Number, required:true},







})

module.exports = mongoose.model('Subscriptions', subSchema);