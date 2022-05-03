const express = require('express');
const router = express.Router();

const carroController = require('./controllers/carroController');
const ipvaController = require('./controllers/ipvaController');

router.get('/carros', carroController.buscarTodos);
router.get('/carro/:codigo', carroController.buscarUm);
router.post('/carro', carroController.inserir);
router.put('/carro/:codigo', carroController.alterar);
router.delete('/carro/:codigo', carroController.excluir);
router.get('/ipva', ipvaController.buscarTodos);

module.exports = router;