const express =require('express');
const app= express()
const path =require('path')
const mongoose =require('mongoose')
const collection =require('./mongoose.js');
const seed =require('./seed.js');
const bparser =require('body-parser');
app.set('view engine','ejs');
app.use(bparser.urlencoded({extended: false}));
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,"public")))
// CONNECTION ----->
const url = "mongodb+srv://arjunm21:arjunm21@cluster0.zaoidt3.mongodb.net/test?retryWrites=true&w=majority";
mongoose.set('strictQuery',false);

const db=()=>{
    mongoose.connect(url).then(()=>{
    console.log("connected");
}).catch(err=>console.error(err));
}

db();
app.get('/',(req,res)=>{
    res.render('abc');
})
app.get('/beverage',async (req,res)=>{

    let data =  await collection.beverage.find()
    
    res.render('k',{data:data,type:"beverage"});
})
app.get('/main',async (req,res)=>{
    let data =  await collection.main.find()
    
    res.render('k',{data:data,type:"main"});
})
app.get('/stater',async (req,res)=>{
    let data =  await collection.stater.find()
    
    res.render('k',{data:data,type:"stater"});
})
app.get('/dessert',async (req,res)=>{
    let data =  await collection.dessert.find()
    
    res.render('k',{data:data,type:"dessert"});
})
app.get('/dilevery/:name/:type', async (req,res)=>{
    let name = req.params.name;
    let type =req.params.type;
    let data={};
    if(type=='beverage'){
    data = await collection.beverage.findOne({Foodname:name});}
    if(type=='main'){
        data = await collection.main.findOne({Foodname:name});}
        if(type=='stater'){
           data = await collection.stater.findOne({Foodname:name});}
            if(type=='dessert'){
                 data = await collection.dessert.findOne({Foodname:name});}
    console.log(type)
    res.render('dileveries',{data:data});
  
})
app.get('/orderplaced',(req,res)=>{
    res.send({Message:"Your order have benn placed"});
})
app.listen(3000)