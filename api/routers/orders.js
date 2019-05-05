const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    res.status(200).json({
        order_msg: "Order GET OK"
    });
} );

// /:orderId get
router.get('/:orderId', (req, res) =>{
    const id = req.params.orderId;
    if (id !== '123') {
        res.status(200).json({
            ord_msg: "id wrong"
        });
    } else {
        res.status(200).json({
            ord_msg: "id correct!!!"
        });
    }
});

// post
router.post('/', (req, res) => {
    res.status(200).json({
        ord_msg: "order POST"
    });
});

// put
router.put('/', (req, res) => {
    res.status(200).json({
        ord_msg: "order PUT"
    });
});

// delete
router.delete('/', (req,res) => {
    res.status(200).json({
        ord_msg: "order DELETE"
    });
});

module.exports = router;
