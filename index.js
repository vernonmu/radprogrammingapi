const express = require('express')
const app = express()
const PORT = process.env.PORT || 3100

app.get('/', (req, res) => {
    res.send("Welcome to the Radical Programming API.")
})

app.get('/computer/basics', (req, res) => {
    res.json({
        topic: 'Basics of Computer',
        content: 'Content about the basics of computers.'
    })
})

app.use(function (req, res, next) {
    res.status(404).send(`Sorry, we couldn't find the page: ${req.originalUrl} <br> <button onclick="window.history.back()">Go Back</button>`);
});




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} `)
})