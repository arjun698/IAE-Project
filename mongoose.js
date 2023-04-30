const mongoose = require('mongoose')

const url = "mongodb+srv://arjunm21:arjunm21@cluster0.zaoidt3.mongodb.net/test?retryWrites=true&w=majority";
mongoose.set('strictQuery',false);

const db=()=>{
    mongoose.connect(url).then(()=>{
    console.log("connected");
}).catch(err=>console.error(err));
}

db();

const Beverage = new mongoose.Schema({
   Imagelink:{
    type:String,
    required:true
    },
    Foodprice:{
        type:Number,
    required:true
    },
    Fooddcustomization:[{
        type:String,
    required:true
    }],
    Foodname:{
        type:String,
    required:true
    },
    Quotes:{
        type:String,
        required:true
    }
  
  })
  const Stater = new mongoose.Schema({
    Imagelink:{
     type:String,
     required:true
     },
     Foodprice:{
         type:Number,
     required:true
     },
     Fooddcustomization:[{
         type:String,
     required:true
     }],
     Foodname:{
         type:String,
     required:true
     },
     Quotes:{
        type:String,
        required:true
     }
   
   })
   
   const Main = new mongoose.Schema({
    Imagelink:{
     type:String,
     required:true
     },
     Foodprice:{
         type:Number,
     required:true
     },
     Fooddcustomization:[{
         type:String,
     required:true
     }],
     Foodname:{
         type:String,
     required:true
     },
     Quotes:{
        type:String,
        required:true
     }
   
   })
   const Dessert = new mongoose.Schema({
    Imagelink:{
     type:String,
     required:true
     },
     Foodprice:{
         type:Number,
     required:true
     },
     Fooddcustomization:[{
         type:String,
     required:true
     }],
     Foodname:{
         type:String,
     required:true
     },
     Quotes:{
        type:String,
        required:true
     }
   
   })


   const beverage =mongoose.model('beverage',Beverage);
   const main =mongoose.model('main',Main);
   const dessert =mongoose.model('dessert',Dessert);
   const stater =mongoose.model('stater',Stater);

   module.exports.beverage =beverage;
   module.exports.main =main;
   module.exports.dessert =dessert;
   module.exports.stater =stater;



   


