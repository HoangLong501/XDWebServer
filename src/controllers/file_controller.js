// const FileExcel = require('../models/FileExcel');
const XLSX = require('xlsx');
const SinhVien = require('../models/sinhvien');


const FileExcelController ={
   uploadFile(req ,res){
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet);
  //console.log(jsonData);
  res.json(jsonData);

  for(let i=0;i<jsonData.length;i++){
   SinhVien.insertSinhVien(jsonData[i]);
   //console.log(jsonData[i]);
  }

   }
   
}

module.exports=FileExcelController;
