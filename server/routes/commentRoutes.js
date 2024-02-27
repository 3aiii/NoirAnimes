const { insertComment, getCommet, updateCommentLike } = require('../controllers/commentController')
const router = require('express').Router()

router.get('/getcomments',getCommet)
router.put('/updateLike',updateCommentLike)
router.post('/insertcomment',insertComment)

module.exports = router