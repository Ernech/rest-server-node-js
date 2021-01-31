require('./config/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/users', function(req, res) {
    res.json('GET users')
})

app.post('/users', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mng: 'Required name'
        });
    } else {
        res.json({ persona: body })
    }



})

app.put('/users/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    })
})

app.delete('/users', function(req, res) {
    res.json('DELETE users')
})


app.listen(process.env.PORT, () => {
    console.log('Listening the port', 3000);
});