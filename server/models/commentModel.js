const mongoose = require('mongoose')

const CommentModel = new mongoose.Schema({
    CommentTitle : {
        type : String,
        require : true
    },
    User_commenter : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'Users'
    },
    AnimeId : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'Animes'
    },
    commentLink : {
        type : Number,
    }
})

module.exports = mongoose.model('Comments',CommentModel)