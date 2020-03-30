const express = require('express');

const router = express.Router();


//http://localhost:3000/products
router.get('/', (req, res, next )=> {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next )=> {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    });
});

router.put('/', (req, res, next )=> {
    res.status(200).json({
        message: 'Handling PUT requests to /products'
    });
});

router.delete('/', (req, res, next )=> {
    res.status(200).json({
        message: 'Handling delete requests to /products'
    });
});

//--------
router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if(id === 'special') {
        res.status(200).json({
            message: 'Special ID',
            id: id
        });
    }else{
        res.status(200).json({
            message: 'Passed an ID'
        });
    }
});

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Update'
    });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Delete'
    });
});

module.exports = router;