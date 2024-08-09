// const ftype=require('../model/schema');

// const getdata=async(req,res)=>{
//     const datat= await ftype.find();
//     res.status(201).json(datat);
//     console.log(datat)
// }

// module.exports=getdata;

const ftype= require('../model/schema');

const getdat= async(req, res)=>{
const alldata= await ftype.find();
res.status(201).json(alldata)
console.log(alldata);
}
module.exports=getdat;