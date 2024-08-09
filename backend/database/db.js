const mongose=require('mongoose');

mongose.connect("mongodb+srv://mernuser:supperpassword@cluster0.cqczybv.mongodb.net/Practice3")
.then(()=>{
    console.log("database is connect")
})
.catch((err)=>{
    console.log(err)
})