var express = require('express');
var router = express.Router();
var apictrl = require('../controllers/api');

router.get('/', (req, res) => {
    apictrl.getPlats(req, res);
});

router.get('/:plat', (req, res) => {
    apictrl.getRecettes(req, res);
});

router.put('/:plat', (req, res) => {

});

router.delete('/:plat', (req, res) => {

});

router.put('/:plat/:recette', (req, res) => {

});

router.delete('/:plat/:recette', (req, res) => {

});


module.exports = router;
