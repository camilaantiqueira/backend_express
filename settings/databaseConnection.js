let sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:');



/* Função para criar tabelas necessárias. */

db.serialize(function() { 

    let sql_create = `CREATE TABLE user (
                        user_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
                        user_name TEXT NOT NULL, 
                        user_email TEXT NOT NULL 
                        );`;

    let sql_task = `CREATE TABLE task (
                        task_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                        task_description TEXT NOT NULL,
                        done_flag INTEGER NOT NULL,
                        user_id INTEGER NOT NULL,
                        FOREIGN KEY (user_id) REFERENCES "user" (user_id)
                            ON DELETE NO ACTION ON UPDATE NO ACTION
                        );`;


    db.run(sql_create);
    db.run(sql_task);

});


module.exports = db;
