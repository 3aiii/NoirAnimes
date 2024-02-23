const mongoose = require('mongoose')

const MyListModel = new mongoose.Schema({
    UserId : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'Users'
    },
    AnimeId : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'Animes'
    },
})

module.exports = mongoose.model('Mylists',MyListModel)