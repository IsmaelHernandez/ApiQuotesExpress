const quotesDb = []
let id = 1

// Function for getQuotes
const findAllQuotes = () => {
    return quotesDb
}

// Function getQuotes for id
const findQuotesById = (id) => {
    const data = quotesDb.find(item => item.id == id)
    return data
}

// Function for create Quotes
//valores opcionales con el or 
const postQuotes = (obj) => {
    const newQuotes = {
        id: id++,
        author: obj.author,
        quote: obj.quote,
        year: obj.year,
    }
    quotesDb.push(newQuotes)
    return newQuotes
}

//Funcio para cita aleatoria
//Acceder por la posicion
const findQuotesRamdon = () => {
    const randomIndex = Math.floor(Math.random() * quotesDb.length)
    return quotesDb[randomIndex]
}

module.exports = {
    findAllQuotes,
    findQuotesById,
    postQuotes,
    findQuotesRamdon,
}