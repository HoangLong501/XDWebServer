const db = require("../config/db");

class Subject  {
    constructor(id_subject,name_subject,start_time,end_time) {
        this.id_subject= id_subject;
        this.name_subject= name_subject;
        this.start_time= start_time;
        this.end_time= end_time;
    }
    static getSubject (id_subject,callback){ 
        db.query('SELECT * FROM subject  WHERE id_subject = ?' ,[id_subject] ,callback);
    }
    static getAllSubject (callback){ 
        db.query('select * from subject' , callback);
    }
    static insertSubject(Subject , callback){
        const sql = 'INSERT INTO subject (id_subject, name_subject, start_time,end_time) VALUES (?, ?, ?, ?)';
        const values = [Subject.id_subject, Subject.name_subject, Subject.start_time, Subject.end_time];
        db.query(sql,values,callback);
    }
    static updateSubject(id_subject, Subject, callback) {
        db.query('UPDATE subject SET ? WHERE id_subject = ?', [Subject, id_subject], callback);
    }

    static deleteSubject(id_subject, callback) {
        db.query('DELETE FROM subject WHERE id_subject = ?', [id_subject], callback);
    }
};  

module.exports = Subject;
