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
    commentLike : {
        type : Number,
        default : 0
    },
    AnimeId : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'Animes'
    },
})

module.exports = mongoose.model('Comments',CommentModel)