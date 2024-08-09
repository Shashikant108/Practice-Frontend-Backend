const express=require('express');
const created = require('../controller/create');
const getdat = require('../controller/getdata');
const delet = require('../controller/delete');
const singled = require('../controller/singledata');
const route=express.Router();

route.post('/create', created)
route.get('/get', getdat)
route.delete('/delete/:id',delet)
route.get('/single/:id', singled);


module.exports=route;