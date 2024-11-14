// Importando o módulo mssql
const oracledb = require ('oracledb');

const sqlConnection = () => {
    const sqlConfig = {
        user: 'PWEB', // seu usuario BD+7 últimos dígitos do seu ra
        password: 'admin', // sua senha
        connectionString: 'localhost:1521/xepdb1',
        // options:{
        // encrypt: false,
        //     trustServerCertificate: true
        // }
    }       
    return oracledb.getConnection(sqlConfig);
 }
 module.exports = () => {
    console.log('Conexão criada')
    return sqlConnection
};
