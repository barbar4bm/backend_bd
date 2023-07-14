const express = require('express');

const router = express.Router();

const items = require('./items')

router.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a la API'
    })
})

router.use('/items', items);

module.exports = router;