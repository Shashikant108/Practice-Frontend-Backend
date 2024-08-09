const mongose=require('mongoose')

const myschema=new mongose.Schema({
    iname:{
        type:String
    },
   price:{
    type:String
   },
   photo:{
   type:String
   }
})

const ftype= new mongose.model('producted', myschema)
module.exports=ftype;