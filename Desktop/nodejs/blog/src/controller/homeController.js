const getHomePage = (req, res) => {
    res.send('Hello World! teo')
}

const getPerson = (req, res) => {
    res.send('TEOLEO')
}

const getSample = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getPerson,
    getSample
}