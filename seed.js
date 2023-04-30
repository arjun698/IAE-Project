
const mongoose = require('mongoose');

const url = "mongodb+srv://arjunm21:arjunm21@cluster0.zaoidt3.mongodb.net/test?retryWrites=true&w=majority";
mongoose.set('strictQuery',false);

const db=()=>{
    mongoose.connect(url).then(()=>{
    console.log("connected");
}).catch(err=>console.error(err));
}

db();
const collection =require('./mongoose.js');






const beverageinsert = async function(image ,price,customization,name,Quotes){
    let usr={
    Imagelink:image,
        Foodprice:price,
        Fooddcustomization:customization,
        Foodname:name,
        Quotes:Quotes}
    let data=    await collection.beverage.create(usr);
   console.log(data);

    
}
const mainnsert = async function(image ,price,customization,name,Quotes){
    let usr={
    Imagelink:image,
        Foodprice:price,
        Fooddcustomization:customization,
        Foodname:name,
        Quotes:Quotes}
    let data=    await collection.main.create(usr);
   console.log(data);

    
}
const dessertinnsert = async function(image ,price,customization,name,Quotes){
    let usr={
    Imagelink:image,
        Foodprice:price,
        Fooddcustomization:customization,
        Foodname:name,
        Quotes:Quotes}
    let data=    await collection.dessert.create(usr);
   console.log(data);

    
}
const staterinnsert = async function(image ,price,customization,name,Quotes){
    let usr={
    Imagelink:image,
        Foodprice:price,
        Fooddcustomization:customization,
        Foodname:name,
        Quotes:Quotes}
    let data=    await collection.stater.create(usr);
   console.log(data);

    
}

// Beverage insert ---------------->


// let a= ["  shot of wheatgrass", " shot of ginger" ]
// beverageinsert("https://5.imimg.com/data5/SELLER/Default/2021/4/WW/IN/WI/941147/cold-press-juice-bottle-1000x1000.jpg",100,a,"Cold-pressed juice","Vegan food is the future. It's good for the environment, good for animals, and good for you.")
//  let a=[" add a shot of lemonade"," add a shot peach syrup" ]
//  beverageinsert("https://images.squarespace-cdn.com/content/v1/5c7472c6fb22a55473a9f139/3da04ab4-5561-492e-b887-82ea2090137a/food-photographer-jennifer-pallian-sSnCZlEWN5E-unsplash.jpg",80,a,"Iced herbal tea ","The greatness of a nation and its moral progress can be judged by the way its animals are treated.")
//  let a =[" add a shot of vanilla syrup ","add a shot cinnamon" ];
//  beverageinsert("https://sunkissedkitchen.com/wp-content/uploads/2016/12/vanilla-almond-latte-RC.jpg",85,a,"Almond milk latte","The greatness of a nation and its moral progress can be judged by the way its animals are treated.")
 
// let a =[" add a shot of espresso" ,"add a sprinkle of cayenne pepper" ]
// beverageinsert("https://minimalistbaker.com/wp-content/uploads/2012/11/Vegan-Mexican-Hot-Chocolate-with-Coconut-Whipped-Cream.jpg",100,a,"Spiced hot chocolate with coconut whipped cream","Eating vegan is a decision that is beneficial to both your health and the environment." )

// staterinsert ---------------->
// let a=["add grilled tofu", "add tempeh bacon", "add vegan chicken"];
// staterinnsert("https://i0.wp.com/wanderingchickpea.com/wp-content/uploads/2022/01/dscf3147.jpg",299,a,"Roasted beet and avocado salad with citrus dressing","Vegan food is not just for vegans. It's for everyone who cares about their health, the environment and animals.")

// let a=["add a side of garlic bread","add vegan grilled cheese sandwich"];
// staterinnsert("https://cafedelites.com/wp-content/uploads/2018/11/Cream-of-Mushroom-Soup-IMAGE-135.jpg",399,a,"Creamy mushroom and thyme soup","It is our duty to protect the environment and all living beings, and a vegan diet is one way to achieve this")

// let a=["add a side of mango chutney" ,"add mint yogurt sauce"];
// staterinnsert("https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg",499,a,"Spicy lentil and vegetable samosas","Eating vegan is a powerful way to support our planet and all of its inhabitants")
//maininsert ------------------>


// dessertinsert------------------>
// let a =["vegan ice cream" ," whipped cream "];
// dessertinnsert("https://detoxinista.com/wp-content/uploads/2016/09/almond-butter-brownies-1.jpg",200,a,"Raw vegan chocolate brownie with almond butter frosting","Eating vegan is not a sacrifice, it's a joy.");

// let b =[" maple syrup to their pudding" ," agave nectar to their pudding",  "  coconut flakes ", "chopped nuts"  ,"granola"];
// dessertinnsert("https://detoxinista.com/wp-content/uploads/2016/09/almond-butter-brownies-1.jpg",150,b,"Chia seed pudding with fresh berries and coconut flakes","The greatness of a nation and its moral progress can be judged by the way its animals are treated.");
// let c =[" side of berry compote" ," chocolate sauce"];
// dessertinnsert("https://themovementmenu.com/wp-content/uploads/2017/02/Easy-Vegan-Raspberry-Cheesecake-1.jpg",155,c,"Vanilla and raspberry cashew cheesecake","Vegan food is not about restriction or limitation, it's about creating a world that is compassionate, healthy and sustainable.");

