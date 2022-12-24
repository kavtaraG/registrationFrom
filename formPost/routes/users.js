var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user_reg', function(req, res, next) {
  res.send('user reg');
});

router.post('/user_reg', async function(req, res, next) {
  console.log(`req.body.name:: ${req.body.name}`);
  console.log(`req.body.surname:: ${req.body.surname}`);
  console.log(`req.body.mail:: ${req.body.mail}`);
  console.log(`req.body.password:: ${req.body.password}`);
  console.log(`req.body.confirm:: ${req.body.confirm}`);

  let userRegister = await register(req.body.name, req.body.surname, req.body.mail, req.body.password)
  if(userRegister && typeof(req.body) != 'undefined'){
    res.send({status: 'ok', msg: 'register success'})
  }else{
    res.send({status: 'fail', msg: 'fail register'})
  }
});

router.get('/sing_in', function(req, res, next) {
  res.send('sing in');
});

router.post('/sing_in', function(req, res, next) {
  console.log(`req.body.mail:: ${req.body.mail}`);
  console.log(`req.body.password:: ${req.body.password}`);
  let userSingIn = singIn(req.body.mail, req.body.password);
  if(userSingIn && typeof(req.body) != 'undefined'){
    res.send({status: 'ok', msg: 'sing in success'})
  }else{
    res.send({status: 'ok', msg: 'sing in fail'})
  }
});

module.exports = router;
