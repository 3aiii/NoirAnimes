const { getRecommends } = require('../controllers/recommendController')
const router = require('express').Router()

router.get('/getrecoms',getRecommends)

module.exports = router