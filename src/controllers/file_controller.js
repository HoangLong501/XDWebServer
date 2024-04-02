// const FileExcel = require('../models/FileExcel');
const XLSX = require('xlsx');

const FileExcelController ={
   uploadFile(req ,res){
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet);
  res.json(jsonData);
   }
}

module.exports=FileExcelController;
