const mysql = require('mysql');
const conection = mysql.createConnection({
    host:'localhost',
    user:'AdminFinance',
    password:'Manager1',
    database:'BDAdminFinance'

})
conection.connect((err) =>{
    if(err)throw err
    console.log('la conexion funciona')
})

conection.query('select * from personas',(err,rows)=>{
    if(err)throw err
    console.log('losDatos de la tabla son : ')
    console.log(rows)
    console.log('la cantidad de objetos es : ')
    console.log(rows.length)
    console.log(rows[0])
})
conection.end();