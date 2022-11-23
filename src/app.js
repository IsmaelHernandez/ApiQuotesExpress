const  express = require('express')
const app = express()
const port = 9000
const quotesRouter = require('./quotes/quotes.router')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

app.use('/api/v1', quotesRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})