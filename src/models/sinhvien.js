const db = require("../config/db");

class SinhVien  {
    constructor(mssv,name,grade,time,day) {
        this.mssv= mssv;
        this.name= name;
        this.grade= grade;
        this.time= time;
        this.day= day;
    }
    static getSinhVien(id_subject, callback) {
        db.query('SELECT * FROM sinhvien INNER JOIN subject ON sinhvien.id_subject = subject.id_subject WHERE subject.id_subject = ?', [id_subject], callback);
    }
    static getAllSinhVien (callback){ 
        db.query('select * from sinhvien' , callback);
    }
    static insertSinhVien(sinhvien , callback){
        const sql = 'INSERT INTO sinhvien (mssv, name, grade, time, day) VALUES (?, ?, ?, ?, ?)';
        const values = [sinhvien.mssv, sinhvien.name, sinhvien.grade, sinhvien.time, sinhvien.day];
        db.query(sql,values,callback);
    }
    static updateSinhVien(mssv, sinhvien, callback) {
        db.query('UPDATE sinhvien SET ? WHERE mssv = ?', [sinhvien, mssv], callback);
    }

    static deleteSinhVien(mssv, callback) {
        db.query('DELETE FROM sinhvien WHERE mssv = ?', mssv, callback);
    }
};  

module.exports = SinhVien;