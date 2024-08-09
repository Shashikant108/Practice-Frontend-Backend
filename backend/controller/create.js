const ftype=require('../model/schema');

const created=async(req, res)=>{
    const{iname,price,photo} = req.body;
    const create=await ftype({iname,price,photo})
    await create.save();
    res.status(201).json(create)
    console.log(create);
}

module.exports=created;