var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);

  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */
 //  http://localhost:3000/api/employee/all
  router.get('/all', (req, res, next) => {
	  
	  empModel.getAll((err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(docs);
    });
   
  });// all

// http://localhost:3000/api/employee/byid/:id
router.get('/byid/:id',(req, res)=>{
    var id =  req.params.id ;
    empModel.getById(id, (err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(docs);
    });// getBYId
});


// http://localhost:3000/api/employee/bycompany/:company
router.get('/bycompany/:company',(req, res)=>{
    var company =  req.params.company;
    empModel.getBycompany(company, (err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(docs);
    });// /bycompany/:company
});


// http://localhost:3000/api/employee/bytag/:tag
router.get('/bytag/:tag',(req, res)=>{
    var tag =  req.params.tag ;
    empModel.getBytag(tag, (err, docs)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(docs);
    });// /bytag/:tag
});

// http://localhost:3000/api/employee/addtag/:id
router.post('/addtag/:id ', (req, res)=>{
  var datosEnviados = req.body;
  
  empModel.addNew(datosEnviados, (err, addedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({error:'error'});
    }
    return res.status(200).json(addedDoc);
    }); //addtag/:id 
});
  
  // http://localhost:3000/api/employee/delete/:id
  router.delete('/delete/:id', (req, res)=>{
  var id = req.params.id;
  empModel.deleteByid(id, (err, deletedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(deletedDoc);
  }); //  /delete/:id
});
  
  // http://localhost:3000/api/employee/makeolder
 router.post('/makeolder ', (req, res)=>{
  var datosEnviados = req.body;
  
  empModel.addNew(datosEnviados, (err, addedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({error:'error'});
    }
    return res.status(200).json(addedDoc);
    }); //makeolder
}); 
  
  
  
  return router;
}

module.exports = initEmployee;
