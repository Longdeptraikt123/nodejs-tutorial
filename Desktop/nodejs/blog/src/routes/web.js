const express = require('express')
const router = express.Router()

// create route
router.get('/', (req, res) => {
    res.send('Hello World! Teoem')
})

router.get('/teo', (req, res) => {
    res.send('Hoang Long')
})

router.get('/abc', (req, res) => {
    res.render('sample.ejs')
})
module.exports = router 