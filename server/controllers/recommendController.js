const Anime = require('../models/animeModel.js')

module.exports = {
    getRecommends : async (req,res) =>{
        try {
            const data = await Anime.find()
                .select('AnimeImg AnimeName AnimeDesc viewCount')
                .sort({ viewCount : -1 })
                .limit(6)
            res.send(data)
        } catch (error) {
            res.send(error)
        }
    }
}