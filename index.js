const express = require('express')
const app = express()
const PORT = process.env.PORT || 3100

app.get('/', (req, res) => {
    res.send("Welcome to the Radical Programming API.")
})

app.get('/computer/basics', (req, res) => {
    res.send(`
        <h1>Basics of Computers</h1>
        <p>Content about the basics of computers or Computer Science 101. Here is a free e-book to get started - <a href="https://cse.unl.edu/~cbourke/ComputerScienceOne.pdf">Computer Science One by Chris Bourke</a></p>
    `);
})


app.use(function (req, res, next) {
    res.status(404).send(`Sorry, we couldn't find the page: ${req.originalUrl} <br> <button onclick="window.history.back()">Go Back</button>`);
});




app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} `)
})