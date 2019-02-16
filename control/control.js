const mongoose = require('mongoose')
var Schema = require('../modal/modal')

const tasktally = mongoose.model('workflow', Schema);

const package = (req, res)=>{

  var newpack = new tasktally(req.body);
  newpack.save((err, pack)=>{
    if(err){
      res.send(err);
    }
    res.json(pack);
  });

};

module.exports = package; 
