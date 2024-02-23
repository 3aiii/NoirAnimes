const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    UserName : {
        type : String,
        require : true,
    },
    PassWord : {
        type : String,
        require : true,
    },
    FirstName : {
        type : String,
        require : true,
    },
    LastName : {
        type : String,
        require : true,
    },
    Email : {
        type : String,
        require : true,
    },
    img_user : {
        type : String,
        require : true
    },
    Role : {
        type : String,
        require : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model("Users",userModel)