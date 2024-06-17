const mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var setupSchema = new mongoose.Schema({


accountType:{type:String, required:true},
size:{type:String, required:true},
accountName:{type:String, required:true},
accountNumber:{type:Number, required:true},
schoolName:{type:String, required:true},
schoolType:{type:String, required:true},
prefix:{type:String, required:true},
suffix:{type:String,},
business_email:{type:String, required:true},
name:{type:String, required:true},
surname:{type:String, required:true},
password:{type:String, required:true},
companyId:{type:String},

})


// Custom validation for email
setupSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);  
  };
  
setupSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);  
  };

module.exports = mongoose.model('Setup', setupSchema);