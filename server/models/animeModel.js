const mongoose = require('mongoose')

const AnimesModel = new mongoose.Schema({
    AnimeName : {
        type : String,
        require : true,
    },
    AnimeDesc : {
        type : String,
        require : true,
    },
    AnimeImg : {
        type : String,
        require : true,
    },
    AnimeTitle : {
        type : String,
        require : true,
    },
    Detail : [{
        AnimeVideoPreview : {
            type : String,
            require : true
        },
        AnimeType : {
            type : String,
        },
        AnimeEpisode : {
            type : Number,
        },
        AnimeStatus : {
            type : String,
        },
        AnimeAired : {
            type : Date,
        },
        AnimePremiered : {
            type : String,
        },
        AnimeProducers : {
            type : String,
        },
        AnimeLicensors : {
            type : String,
        },
        AnimeStudios : {
            type : String,
        },
        AnimeSource : {
            type : String,
        },
        AnimeGenres : {
            type : String,
        },
        AnimeThemes : {
            type : String,
        },
        AnimeDemographic : {
            type : String,
        },
        AnimeDuration : {
            type : String,
        },
        AnimeRating : {
            type : String,
        }
    }],
    AnimeCategory : {
        type : mongoose.Schema.Types.ObjectId,
        require : true,
        ref : 'categorys',
    },
    UserId : {
        type : mongoose.Schema.Types.ObjectId,
        require :true,
        ref : 'Users',
    },
    viewCount : {
        type : Number,
    }
},{
    timestamps : true
})

module.exports = mongoose.model('Animes',AnimesModel)