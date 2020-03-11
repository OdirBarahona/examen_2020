var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('employees');
  
  lib.getEmployees = (handler)=>{
    var userTemplate = {
    company: "",
    email: "",
    phone: "",
	address: "",
	name: "",
	age: ""
  }
  
  lib.getAll = (handler)=>{
    // handler(err, docs)
   empColl.find({}).toArray(handler);
  }
	
    return handler(new Error("No Implementado"), null);
  }


  lib.getEmployeesById = (id, handler) => {
	  
	  empColl.getEmployeesById = (id, handler)=>{
    var query = {"userEmail":email};
    var projection = { "userEmail": 1, "phone": 1, "name":1 , "age": 1};
    seguridadCollection.findOne(
      query,
      {"projection":projection},
      (err, docs)=>{
        if(err){
          return handler(err,null);
        }
        return handler(null, docs);
      }
    )
  }


    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByCompany = (company, handler) => {
	  
	 
	  empColl.getEmployeesByCompany = (Company, handler)=>{
    var query = {"Company":Company};
    var projection = { "userEmail": 1, "company": 1, "name":1 };
   empColl.findOne(
      query,
      {"projection":projection},
      (err, docs)=>{
        if(err){
          return handler(err,null);
        }
        return handler(null, docs);
      }
    )
  } 
    
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    empColl.getEmployeesByTag = (tag, handler)=>{
    var query = {"tag":tag};
    var projection = { "userEmail": 1, "tag": 1, "name":1 };
    empColl.findOne(
      query,
      {"projection":projection},
      (err, docs)=>{
        if(err){
          return handler(err,null);
        }
        return handler(null, docs);
      }
    )
  } 
    return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
	  
	  var { email, company, phone} = dataToAdd;
    var userToAdd = Object.assign(
      {},
      userTemplate,
      {
         company: "",
    email: "",
    phone: "",
	address: "",
	name: "",
	age: ""
      }
    );
    empColl.insertOne(tagToAdd, (err, rslt)=>{
      if(err){
        return handler(err, null);
      }
      console.log(rslt);
      return handler(null, rslt.ops[0]);
    }); 
  
    
    return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
	 var query = { "_id": new ObjectID(id) };
    empColl.findOne(
      query,
      (err, docs) => {
        if (err) {
          return handler(err, null);
        }
        return handler(null, docs);
      }
    ); 
  
 
    return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
	  
	   var { _id, age, name , company} = dataToUpdate;
    var query = { "_id": new ObjectID(_id)};
    var updateCommad = {
      "$set":{
        name: name,
		age: age,
       company: company,
        
      },
      "$inc" :{
        "updates": 1
      }
    };
    empColl.updateOne(
      query,
      updateCommad,
      (err, rslt)=>{
        if(err){
          return handler(err, null);
        }
        return handler(null, rslt.result);
      }
    );
	  
    
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
