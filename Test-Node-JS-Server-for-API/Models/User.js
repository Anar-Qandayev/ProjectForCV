const { default: mongoose, mongo } = require("mongoose")

const UserSchema = mongoose.Schema({

    username:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },
    
    
    password:{
        type:String,
        require:true
    }


})

const Usermodel = mongoose.model("users", UserSchema)
module.exports = Usermodel;