class UserDao{

    constructor(db) {

        this._db = db;
    }

   /* Function to create a new user. */

    createUser(userObj,callback) {
        let insertUser =`insert into user(user_name,user_email) values("${userObj.user_name}", "${userObj.user_email}")`;

        this._db.run(insertUser, function(err,resolve) {
            callback(err,resolve);
        })
    }

    /* Function to check users. */

    getUsers(callback) {
        let getUsers = `select * from user`;

        this._db.all(getUsers, function(err,resolve) {
            callback(err,resolve);
        })
    }

}

module.exports =  UserDao;