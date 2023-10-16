const express = require('express')
const router = express.Router()
const { getHomePage, getPerson, getSample } = require('../controller/homeController')
// create route
router.get('/', getHomePage)
router.get('/teo', getPerson)
router.get('/abc', getSample)

module.exports = router 