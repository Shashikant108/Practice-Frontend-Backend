const ftype=require('../model/schema');

const delet=async(req,res)=>{
    const {id}=req.params;
    const deleted=await ftype.findByIdAndDelete({_id:id});
    res.status(201).json(deleted);
    console.log(deleted)
}

module.exports=delet;