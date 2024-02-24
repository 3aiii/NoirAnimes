const { getUser } = require('../controllers/userController')
const router = require('express').Router()

router.get('/getuser/:id',getUser)

module.exports = router