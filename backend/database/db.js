var Firebird = require('node-firebird');

var options = {};
 
options.host = '127.0.0.1';
options.port = 3050;
options.database = 'D:/Projects Dev/www/dspdv/backend/database/HOST.FDB';
options.user = 'SYSDBA';
options.password = 'masterkey';
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;            // default
options.pageSize = 4096;  


Firebird.attach(options, (err, db) => {
    if (err) throw err;
   
    db.query(' SELECT CLIENTE, RAZ_SOCIAL FROM CLIENTES where id_cliente = 2', function(err, result) {
        // IMPORTANT: close the connection
        db.detach();
        if(result !== undefined){
               
           console.log(result);
        }
        
    });
    
});// default when creating database


 