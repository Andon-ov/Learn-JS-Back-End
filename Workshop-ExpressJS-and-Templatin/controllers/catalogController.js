const router = require('express').Router();

router.get('/', (req, res) => {

    res.render('catalog', { title: 'Accommodation' });
});

router.get('/:id', (req, res) => {

    res.render('details', { title: 'Accommodation Details' });
});

module.exports = router;