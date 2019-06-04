const express = require('express');
const controller = require('../controller/spoiler');
const oracledb = require('oracledb');
const Spoiler = require("../model/spoiler");
const status = require("http-status");
const sel = require("../database/oracle");

function start(){
    //setInterval(sel.inserirPedidos, 1000);
    setInterval(sel.inserir, 3000);
}

start();

//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨
const router = express.Router();

router.get('/spoilers/:id', controller.buscarUm);

router.get('/spoilers', controller.buscarTodos);

router.post('/spoilers', controller.criar);

router.put('/spoilers/:id', controller.atualizar);

router.delete('/spoilers/:id', controller.excluir);

module.exports = router;