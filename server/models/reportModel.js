const mongoose = require('mongoose')

const ReportModel = new mongoose.Schema({
    AnimeId : {
        type : mongoose.Schema.Types.ObjectId,
        require : true
    },
    Report_desc : {
        type : String,
        require : true
    },
    User_Reported : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'Users'
    },
    User_Reporter : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'Users'
    },
})

module.exports = mongoose.model('Reports',ReportModel)