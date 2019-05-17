const express = require('express');
const controller = require('../controller/spoiler');

const Spoiler = require("../model/spoiler");
const status = require("http-status");

function intervalFunc() {

  Spoiler.findAll()
    .then(spoilers => {

        spoilers.forEach(item => {
            console.log(item.dataValues);
        });

        console.log("teste");
        console.log("");
        console.log("");
        console.log("");
    })
    .catch(erro => console.log(erro));
    
}
  
setInterval(intervalFunc, 2000);

const router = express.Router();

router.get('/spoilers/:id', controller.buscarUm);

router.get('/spoilers', controller.buscarTodos);

router.post('/spoilers', controller.criar);

router.put('/spoilers/:id', controller.atualizar);

router.delete('/spoilers/:id', controller.excluir);

module.exports = router;