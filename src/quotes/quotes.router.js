const router = require('express').Router()

const servicesQuotes = require('./quotes.services')

router.get('/quotes', servicesQuotes.getAllQuotes)
router.get('/quotes/:id', servicesQuotes.getQuotesById)
router.post('/quotes', servicesQuotes.createQuotes)
router.get('/quotes/random', servicesQuotes.getRandomQuote)


module.exports = router