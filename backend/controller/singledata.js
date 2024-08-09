const ftype=require('../model/schema');

const singled=async(req,res)=>{
    const {id}=req.params;
   const singledat=await ftype.findById({_id:id});
    res.status(201).json(singledat);
}

module.exports=singled;