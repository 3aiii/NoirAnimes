const { getPosts, getPost, getSearch } = require('../controllers/animeCoutroller')
const router = require('express').Router()

router.get('/getposts',getPosts)
router.get('/getpost/:id',getPost)
router.get('/getpost/',getSearch)

module.exports = router