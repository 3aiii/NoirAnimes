const User = require("../models/userModel")

module.exports = {
    getUser : async (req,res)=>{
        const { id } = req.params
        try {
            const data = await User.findById(id)
            res.send(data)
        } catch (error) {
            res.send(error)
        }
    },
}