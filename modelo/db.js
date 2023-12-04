import mysql2 from 'mysql2';


export const con = mysql2.createConnection({

    host: 'database-2.c7hxgbp2wlyb.us-east-1.rds.amazonaws.com',
    database: 'TrulyNolen2',
    user: 'admin',
    password: 'admin1234'

});

con.connect(function(err){

    if (err) {
        console.error('erro prro' + err.stack)
        return;
    }
    console.log('conectado prro ID: '+ con.threadId);


})

