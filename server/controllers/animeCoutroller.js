const Anime = require('../models/animeModel.js')

module.exports = {
    getPosts : async (req,res) =>{
        const { limit } = req.query
        try {
            let query = Anime.find()
                .select('AnimeName AnimeDesc AnimeImg AnimeCategory createdAt')
                .populate({ path: 'AnimeCategory', select: 'CategoryTitle' });
                
            if (limit) {
                query = query.limit(limit)
            }
            
            const data = await query;
            res.send(data);        
        } catch (error) {
            res.send(error)            
        }
    },
    getPost : async (req,res) =>{
        const { id } = req.params
        try {
            const data = await Anime.findById(id)
            res.send({ data }) 
        } catch (error) {
            res.send(error) 
        }
    },
    getSearch : async (req,res) =>{
        const { search } = req.query
        try {
            const search_data = await Anime.find({ 
                AnimeName: { $regex: new RegExp(search, "i") } 
            })
                
            res.send(search_data)
        } catch (error) {
            res.send(error)
        }
    }
    
}