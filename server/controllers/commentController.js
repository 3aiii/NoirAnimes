const commentModel = require("../models/commentModel")

module.exports = {
    insertComment : async (req,res) =>{
        const { CommentTitle,User_commenter,commentLike,AnimeId } = req.body
        try {
            const commentData = new commentModel({
                CommentTitle,
                User_commenter,
                commentLike,
                AnimeId
            })
            commentData.save()
            res.send(`Insert successfully!`)
        } catch (error) {
            res.send(error)
        }
    },
    getCommet : async (req,res) =>{
        try {
            const data = await commentModel.find()
                .populate({ path :'User_commenter',select : 'FirstName LastName img_user'})
                .select('CommentTitle commentLike')
            res.send(data)
        } catch (error) {
            res.send(error)            
        }
    },
    updateCommentLike : async (req,res) =>{
        const { id } = req.body
        try {
            await commentModel.findByIdAndUpdate(
                { _id : id },
                { $inc : { commentLike : 1 } })
            return res.send(`update Like success`)
        } catch (error) {
            res.send(error)
        }
    }
}