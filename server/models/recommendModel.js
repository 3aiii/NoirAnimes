const mongoose = require('mongoose')

const RecommendModel = new mongoose.Schema({
    AnimeId : {
        type : String,
        require : true
    },
    View_Count : {
        type : Number,
    },
    Like_Count : {
        type : Number,
    },
    Comment_Count : {
        type : Number,
    }
},{
    timestamps : true
})

module.exports = mongoose.model('Recommends',RecommendModel)