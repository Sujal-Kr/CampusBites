const  { model , Schema } = require('mongoose');

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    given_name:{
        type:String,
        required:true
    },
    family_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    picture:String
});


const UserModel = model("users",userSchema);

module.exports = UserModel;