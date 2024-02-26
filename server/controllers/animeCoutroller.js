const Anime = require('../models/animeModel.js')

module.exports = {
    getPosts : async (req,res) =>{
        const { limit,category } = req.query
        try {
            let query = Anime.find()
                .select('AnimeName AnimeDesc AnimeImg AnimeCategory createdAt')
                .populate({ path: 'AnimeCategory', select: 'CategoryTitle' });
                
            if (limit) {
                if(category){
                    let array = []
                    query = query
                            .where('AnimeCategory')
                            .equals(category)
                    const data = await query;

                    for (let i=0 ; i < data.length - 1 ;i++) {
                       const element = data[i]
                       array.push(element)
                    }
                    return res.send({ normalData : array,mobileData : data[3] });       
                } else{
                    query = query.sort({ craeteAt : -1}).limit(limit)
                }
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
            res.send(data) 
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