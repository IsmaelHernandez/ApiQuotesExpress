const quotesControllers = require('./quotes.controllers')

const getAllQuotes = (req, res) => {
    const data = quotesControllers.findAllQuotes()
    res.status(200).json(data)
}

const getQuotesById = (req, res) => {
    const id = req.params.id
    const data = quotesControllers.findQuotesById(id)
    if(data){
        res.status(200).json(data)
    }else{
        res.status(400).json({message: 'Invalid Data'})
    }
}

const createQuotes = (req, res) => {
    const {author, quote, year} = req.body;

    if(quote && author &&year){
        const data = quotesControllers.postQuotes({
            author, 
            quote, 
            year,
        })//aqui generamos la validacion
        res.status(201).json(data)
    }else{
        res.status(400).json({message: 'Invalid Data'})
    }
}

const getRandomQuote = (req, res) => {
    const data = quotesControllers.getRandomQuote()
    if(data){
        res.status(200).json(data)
    }else{
        res.status(400).json({message: 'DB is empty'})
    }
}

module.exports = {
    getAllQuotes,
    getQuotesById,
    createQuotes,
    getRandomQuote,
}