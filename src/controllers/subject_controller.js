const Subject = require('../models/subject');
const SubjectController ={
    getAllSubject:(req,res)=>{
        Subject.getAllSubject((err,results)=>{
            if (err) {
                console.error('Error getting users:', err);
                res.status(500).json({ error: 'Internal Server Error' });
              } else {
                res.json(results);
                console.log("Test log khi có req GetAllUser");
              }
        });
    },
    createSubject: (req, res ) => {
      const newSV = req.body;
      console.log(req.body);
      Subject.insertSubject(newSV, (err, result) => {
        if (err) {
          console.error('Error creating user:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.json({ message: 'Execute Success' });
          console.log("Test log khi có req createUser");
        }
      });
    },
    updateSubject: (req, res) => {
      const mssv = req.params.mssv;
      const updatedSV = req.body;
      Subject.updateSubject(mssv, updatedSV, (err, result) => {
          if (err) {
              console.error('Error updating user:', err);
              res.status(500).json({ error: 'Internal Server Error' });
          } else {
              res.json({ message: 'Update Success' });
              console.log("Test log khi có req updateSV");
          }
      });
  },
  deleteSubject: (req, res) => {
      const mssv = req.params.mssv;
      Subject.deleteSubject(mssv, (err, result) => {
          if (err) {
              console.error('Error deleting user:', err);
              res.status(500).json({ error: 'Internal Server Error' });
          } else {
              res.json({ message: 'Delete Success' });
              console.log("Test log khi có req deleteSV");
          }
      });
  }
}

module.exports=SubjectController;
