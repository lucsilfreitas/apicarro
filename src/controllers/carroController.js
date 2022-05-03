const carroService = require('../services/carroService');

module.exports = { 
    buscarTodos: async (req, res)=> {
        let json = {error:'', result: []};
        let carros = await  carroService.buscarTodos();
       
        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                modelo: carros[i].modelo,
                placa: carros[i].placa,

            });
        }

        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = { error:'', result:{} };
        let codigo = req.params.codigo;
        let carro = await carroService.buscarUm(codigo);
        if(carro){
            json.result = carro;
        }
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (modelo && placa){
            let CarroCodigo = await carroService.inserir(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if (codigo && modelo && placa){
            await carroService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await carroService.excluir(req.params.codigo);
        
        res.json(json);
    },
}
