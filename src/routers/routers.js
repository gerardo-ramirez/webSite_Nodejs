const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index.ejs',{title:'con router'});// render ya me dice que esta en views por eso la ruta ya la sabe.

});
router.get('/contact',(req,res)=>{
    res.render('contact.ejs',{title:'con router'});// render ya me dice que esta en views por eso la ruta ya la sabe.

});

module.exports = router;// exportamos el metodo, la constante. 