const express = require('express')
const cors = require ('cors')
const api = require('./api');
const app = express();
const PORT = 3001

app.use(cors())

app.get('/', (req,res) => {
    res.json({
        message: 'Bienvenido a ScyllaDB'
    })
})

app.use('/api',api);

app.listen(PORT, () => {
    console.log(`escuchando http://localhost:${PORT}`)
});
