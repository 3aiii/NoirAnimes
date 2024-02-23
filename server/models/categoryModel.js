const mongoose = require('mongoose')

const CategoryModel = new mongoose.Schema({
    CategoryTitle : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('Categorys',CategoryModel)