const express=require('express');
const cors=require('cors');
const collection=require('./mongo');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    // const {msg}=req.body;

    // const data={
    //     msg:msg
    // }
    // await collection.insertMany([data]);
    const product = new collection(req.body);
    // product.title='iphone15';
    // product.price=10000;
    // product.rating=5;
    // 
    product.save()
    .then(savedProduct => {
      // Handle the saved product
      res.status(201).json(savedProduct);
    })
    .catch(error => {
      // Handle the error
      res.status(500).json({ error: 'An error occurred' });
    });
})

app.listen(8000,()=>{
    console.log("port connected");
})