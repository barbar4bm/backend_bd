const express = require('express')
const api = require('./api');
const app = express();
const PORT = 3001 

app.get('/', (req,res) => {
    res.json({
        message: 'Bienvenido a ScyllaDB'
    })
})

app.listeners(PORT, () => {
    console.log(`escuchando http://localhost:${PORT}`)
});
