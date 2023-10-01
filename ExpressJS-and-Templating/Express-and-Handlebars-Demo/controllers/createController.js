const { create } = require('../services/productServices');


const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('create');
});

router.post('/', async (req, res, next) => {
    console.log('Handling Post');

    try {
        await create(req.body.name, req.body.price);

    } catch (error) {
        next(error);
    }

    res.redirect('/catalog');
});

module.exports = router;