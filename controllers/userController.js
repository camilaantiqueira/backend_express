const User = require('../classes/user')
let db = require('../settings/databaseConnection');


const user = new User(db);

class UserController{
    
    constructor(){}

    createUser() {

        return function(req, res) {
            let userObj = req.body;

            user.createUser(userObj, function(error, resolve) {
                if(error){
                    res.status(500).send(error);
                }
                else{   
                    res.send("Usuário '" + userObj.user_name + "' criado");
                }
            })  
        }

    }

    getUsers() {
        return function(req, res) {

            user.getUsers(function(error, resolve) {
                if(error){
                    res.status(500).send(error);
                }
                else{                   
                    res.send(resolve);
                }
            })
        }
    }
    
}

const getUser = new UserController();
module.exports = UserController;