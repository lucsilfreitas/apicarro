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



/* --- */   
}
