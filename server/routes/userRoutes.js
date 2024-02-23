const { getUser } = require('../controllers/userController')
const router = require('express').Router()

router.get('/getuser',getUser)

module.exports = router