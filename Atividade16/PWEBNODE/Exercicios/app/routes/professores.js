// await oracledb.getConnection({ user: "demonode", password: "XXXX", connectionString: "localhost/xepdb1" });
const oracledb = require ('oracledb');

var dbConnection = require('../config/dbConnection');
 
module.exports = function(app){
  app.get('/informacao/professores', function(req,res){
       async function getProfessores() {
           try {
            //    const pool = await dbConnection(); // executando a funcao
 
            //    const results = await pool.request().query('SELECT * from PROFESSORES');
               
                // const connection = await dbConnection();
                const connection = app.config.dbConnection;
                const pool = await connection();
                // const sql = `INSERT INTO professores (NOME_PROFESSOR, EMAIL_PROFESSOR) VALUES (:valor1, :valor2)`;
                // const binds = {
                //     valor1: 'dimas',  // Dados a serem inseridos
                //     valor2: 'dimas@gmail.com',
                //   };

                // const result = await connection.execute(sql, binds, { autoCommit: true });
                // console.log({result});

                const query = await pool.execute(`SELECT * from professores`,[], {outFormat: oracledb.OUT_FORMAT_OBJECT});
                console.log({query})
                const rs = query.rows;
                console.log({rs})
               res.render('informacoes/professores',{profs :  rs});
 
           } catch (err) {
               console.log(err)
           }
       }
 
  getProfessores();
   });
};
