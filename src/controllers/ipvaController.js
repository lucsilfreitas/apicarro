const ipvaService = require('../services/ipvaService');

module.exports = { 
    buscarTodos: async (req, res)=> {
        let json = {error:'', result: []};
        let ipva = await  ipvaService.buscarTodos();
       
        for(let i in ipva){
            json.result.push({
                codigo  : ipva[i].codigo,
                ano     : ipva[i].ano,
                id_ipva : ipva[i].id_ipva,
                preco   : ipva[i].preco,

            });
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let id_ipva = req.body.id_ipva;
        let ano = req.body.ano;
        let preco = req.body.preco;

        if (id_ipva && ano && preco){
            let ipvaCodigo = await ipvaService.inserir(id_ipva, ano, preco);
            json.result = {
                codigo: ipvaCodigo,
                id_ipva,
                ano,
                preco
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);
    }



/* --- */   
}
