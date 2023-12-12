const mongoose=require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/ectut')
 .then(()=>{
    console.log("connected");
 }
 )
 .catch(()=>{
    console.log("failed");
 }

 )
 const newSchema=new mongoose.Schema({
    
    Place:{type:String},
    Date:{type:String},
    Time:{type:String}

 });

 const collection=mongoose.model("collection",newSchema);
 module.exports=collection;