const express=require('express');
const route=express.Router();

const renderfilecalling=require('../services/render')
const controllerfilecalling=require('../controller/controller');

route.get('/',renderfilecalling.index);
route.get('/form',renderfilecalling.form);
route.get('/details',renderfilecalling.details);
route.post('/api/post',controllerfilecalling.create);
route.get('/api/post',controllerfilecalling.getting);
module.exports=route