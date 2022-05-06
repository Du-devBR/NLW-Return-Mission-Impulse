import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    return res.send("hello word")
})

app.listen(3333, () => {
    console.log('HTTP running')
})