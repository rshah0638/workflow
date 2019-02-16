const apackage = require('../control/control')

const routes = (app)=>{
  app.route('/')
  .get((req, res, next)=>{
    // middleware
    console.log('request from',req.originalUrl);
    console.log('request type:', req.method)
    next();
  }, (req, res, next)=>{
    res.send('get request successful')
  })

  .post(apackage);

    app.route('/con')
    .put((req, res)=>
      res.send('put request successful'))

    .delete((req, res)=>
        res.send('delete request successful'));

}

module.exports = routes;
