const db = require("../config/db");

var User = {

    authenticateUser: (account, password, callback) => {
        db.query('SELECT * FROM giangvien WHERE account = ? AND password = ?', [account, password], callback);
    }
};  

module.exports = User;