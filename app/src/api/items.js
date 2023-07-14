const express = require('express')

const router = express.Router();

const items = [
    {id: "1", name: "compras", completed: false},
]
router.get('/', (req, res) => {
    res.json({
        items,
    })
});

module.exports = router;