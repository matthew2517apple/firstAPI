var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next) {
    res.json({'message': 'Hello All!'})
})

router.get('/cat', function(req, res, next) {
    res.json({'message': 'meow meow!'})
})

router.get('/penguin', function(req, res, next) {
    res.json({'message': 'squark!'})
})

module.exports = router