const mongoose = require('mongoose');


var enrollSchema = new mongoose.Schema({


salutation:{type:String, required:true},
firstName:{type:String, required:true},
lastName:{type:String, required:true},
address:{type:String, required:true},
address1:{type:String, required:true},
city:{type:String, required:true},
state:{type:String, required:true},
postal:{type:String, required:true},
phone:{type:String, required:true},
email:{type:String, required:true},
child1:{type:String, required:true},
child2:{type:String, },
child3:{type:String, },
age1:{type:String, required:true},
age2:{type:String, },
age3:{type:String, },
level1:{type:String, required:true},
level2:{type:String, },
level3:{type:String, },
child4:{type:String, },
age4:{type:String, },
level4:{type:String, },






})

module.exports = mongoose.model('Enroll', enrollSchema);