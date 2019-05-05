const express = require('express');
const router = express.Router();

// get
router.get('/', (req, res) => {
    res.status(200).json({
        product_msg: "Product GET OK"
    });
});

// get ID
router.get('/:productId', (req,res) => {
    const id = req.params.productId;
    console.log(id);
    if (id === 'special') {
        res.status(200).json({
            product_msg: "special product", 
            id: id
        });
    } else {
        res.status(200).json({
            product_msg: "normal product",
            id: id
        });
    }
});

// post
router.post('/', (req,res) =>{
    res.status(200).json({
        product_msg: "product POST"
    });
});


// put
router.put('/',(req,res) => {
    res.status(200).json({
        product_msg: "product PUT"
    });
});

// delete
router.delete('/',(req,res) =>{
    res.status(200).json({
        product_msg:"product DELETE"
    });
});
module.exports = router;