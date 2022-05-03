const res = require('express/lib/response');
const db = require('../db');

module.exports = {

    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM ipva', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    inserir: (id_ipva, ano, preco)=> {
        return new Promise((aceito, rejeitado)=> {

            db.query('INSERT INTO ipva (id_ipva, ano, preco) VALUES (?, ?, ?)',
                [id_ipva, ano, preco],
                (error, results)=>{
                    if(error){ rejeitado(error); return; }
                    aceito(results.insertCodigo); //insertId
                }
            );
        });
    },

}