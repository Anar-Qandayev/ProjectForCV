const express = require("express");
const { request, response } = require("express"); 
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const Usermodel =require(`./Models/User`)
const ProductModel = require(`./Models/Product`)
const { default: mongoose } = require("mongoose");
var cors = require("cors");
app.use(cors());
mongoose.connect("mongodb+srv://Anar:Anar123@cluster0.td64tmv.mongodb.net/Store-APP?retryWrites=true&w=majority")

app.post("/postProduct", async(req, res) => {
  const product= req.body
  const newProduct = new ProductModel(product)
  await newProduct.save()
  res.json(product);
});

app.get("/getProducts",(req,res)=>{
  ProductModel.find({}).then(function(products){
    res.json(products)
  }).catch(function(err){
    res.json(err)
  })
});

app.get("/getProducts/:id", (req, res) => {
  const productId = req.params.id;
  ProductModel.findOne({ id: productId })
    .then((product) => {
      if (!product) {
        res.status(404).json({ error: "Product not found" });
      } else {
        res.json(product);
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Error finding the product by ID" });
    });
});

app.get("/get-data", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: products,
  });
});

app.post("/register", async(request, response) => {
  const user= request.body
  const newUser = new Usermodel(user)
  await newUser.save()
  response.json(user);          
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password match the specific case
  if (username === "Anar Gandayev" && password === "123") {
    // Create a sample token (You can replace this with your actual token creation logic)
    const sampleToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJuYW1lIjoiQW5hciBRYW5kYXlldiIsImlhdCI6MTUxNjIzOTAyMn0.xQY-ZSZqa94h_-0TBf00fSIbf2b4J6z-WR9nqZd8CNc";
    res.json({ token: sampleToken, message: "Success" });
  } else {
    // If the specific case doesn't match, query the database
    Usermodel.findOne({ username: username }).then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJuYW1lIjoiQW5hciBRYW5kYXlldiIsImlhdCI6MTUxNjIzOTAyMn0.xQY-ZSZqa94h_-0TBf00fSIbf2b4J6z-WR9nqZd8CNc", message: "Success" });
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    });
  }
});
app.post("/create-data", (request, response) => {
  products.push(request.body);
  console.log(
    "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
    request.body
    );
    response.status(201).send({
      success: "OK",
      message: "Successful date creation",
    });
  });

  app.get("/get-data/:id", (request, response) => { 
    const id = request.params.id; 
    let result=products.filter((item)=>{
      if(typeof item.title !== "undefined"){
        if(item.id == id){
          return item ;
        }
      }
    }); 
    products[result] = request.body;
    response.status(201).send({
      success: "OK",
      message: "Successful date update",
      data:result.pop(),
    });
  });
  
  app.put("/update-data/:id", (request, response) => {
    console.log("🚀 ~ file: server.js ~ line 32 ~ app.put ~ request", request);
    const id = request.params.id;
    let userItem = products.findIndex((user) => user.id === id);
    products[userItem] = request.body;
    response.status(201).send({
      success: "OK",
      message: "Successful date update",
    });
});

app.delete("/delete-data/:id", (request, response) => {
  const id = request.params.id; 
  let userItem = products.findIndex((user) => user.id === Number(id));
  products.splice(userItem, 1);
  response.status(201).send({
    success: "OK",
    message: "Successful date update",
    data:products,
  });
});

const PORT = 3009;

app.listen(PORT, () => {
  console.log(`Start server on  http://localhost:${PORT} !`);
});


// app.get("/getProducts/:id", (request, response) => { 
//   const id = request.params.id; 
//   let result=products.filter((item)=>{
//     if(typeof item.title !== "undefined"){
//       if(item.id == id){
//         return item ;
//       }
//     }
//   }); 
//   products[result] = request.body;
//   response.status(201).send({
//     success: "OK",
//     message: "Successful date update",
//     data:result.pop(),
//   });
// });

// app.post("/login", (request, response) => {
//   products.push(request.body);
//   console.log(
//     "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
//     request.body
//   );
//   if( request.body.username==="Anar Qandayev" && request.body.password==="123"){
//     response.status(200).send({
//       success: "OK",
//       message: "Successful date creation",
//       data:{
//         token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJuYW1lIjoiQW5hciBRYW5kYXlldiIsImlhdCI6MTUxNjIzOTAyMn0.xQY-ZSZqa94h_-0TBf00fSIbf2b4J6z-WR9nqZd8CNc"
//       }
//     });
//   }else{
//     response.status(401).send({
//       success: "Xeta",
//       message: "Istifadeci yoxdur",
//     });
//}
// });

// app.post("/register", async(request, response) => {
//   const user= request.body
//   const newUser = new Usermodel(user)
//   await newUser.save()
//   response.json(user);
//   products.push(request.body);
//   console.log(
//       "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
//       request.body
//     );
//     if( request.body.username && request.body.password){
//       response.status(200).send({ 
//       success: "OK",
//       message: "Siz qeydiyyatdan ugurla kecdiz",
//       data:{
//         token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjMiLCJuYW1lIjoiQW5hciBRYW5kYXlldiIsImlhdCI6MTUxNjIzOTAyMn0.xQY-ZSZqa94h_-0TBf00fSIbf2b4J6z-WR9nqZd8CNc"
//       }
//     });
//   }        
// });


// const products = [
//   {
//     id: 1,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg",
//     category: "Groceries",
//     title: "Assorted Coffee",
//     price: 35.00,
//     type:"BS tProduct", 
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id: 2,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg",
//     category: "Groceries",
//     title: "Hand Sanitizer",
//     price: 15.00,
//     type:"BS tProduct",
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id: 3,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-300x300.jpg",
//     category: "Groceries",
//     title: "Handpicked Red Chillies",
//     price: 19.00,
//     type:"BS tProduct",
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id:4,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-300x300.jpg",
//     category: "Groceries",
//     title: "Natural Extracted Edible Oil",
//     price: 25.00,   
//     type:"BS",
//     discount:"Sale!", 
//     count:1
//   }, 
//   {
//     id: 5,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/wheat-300x300.jpg",
//     category: "Groceries",
//     title: "Wheat From Organic Farms",
//     price: 34.00,
//     type:"", 
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id: 6,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500-300x300.jpg",
//     category: "Groceries",
//     title: "Cashew Butter",
//     price: 25.00, 
//     type:"", 
//     discount:"Sale!",
//     count:1
//   },
//   // {
//   //   id: 7,
//   //   image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-300x300.jpg",
//   //   category: "Groceries",
//   //   title: "Diabetic Cookies",
//   //   price: 25.00, 
//   //   type:"",
//   //   discount:"Sale!",
//   //   count:1
//   // },
//   {
//     id: 8,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-300x300.jpg",
//     category: "Groceries",
//     title: "Farm Fresh Eggs",
//     price: 34.00, 
//     type:"",
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id:9,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-300x300.jpg",
//     category: "Groceries",
//     title: "Fresh Organic Honey",
//     price: 34.00, 
//     type:"",
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id: 10,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/face-wash-300x300.jpg",
//     category: "Groceries",
//     title: "Organic Face Scrub",
//     price: 35.00,
//     type:"", 
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id: 11,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-300x300.jpg",
//     category: "Juice",
//     title: "Fresh Orange Juice",
//     price: 18.00,
//     type:"tProduct", 
//     discount:"Sale!",
//     count:1
//   }, 
//   // {
//   //   id: 12,
//   //   image: "https://imageproxy.wolt.com/menu/menu-images/62c92ab8e97469442dd72e8d/65ae916c-1bb6-11ed-a0e7-32f973a2c946_vitamin_siresi_1_lt.jpeg?w=600",
//   //   category: "Juice",
//   //   title: "Vitamin fruit juices",
//   //   price: 2.90,
//   //   type:"juice",   
//   //   discount:"Sale!",
//   //   count:1
//   // },
//   {
//     id: 13,
//     image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/pulses-300x300.jpg",
//     category: "Groceries",
//     title: "Pulses From Organic Farm",
//     price: 15.00, 
//     type:"",
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id: 14,
//     image: "https://imageproxy.wolt.com/menu/menu-images/62c92ab8e97469442dd72e8d/29a074e0-811b-11ed-b249-9ae3aeccdbd6_sandora_1_lt.jpeg?w=600",
//     category: "Juice",
//     title: "Sandora fruit juices",
//     price: 4.30,
//     type:"juice",  
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id: 15,
//     image: "https://imageproxy.wolt.com/menu/menu-images/62c92ab8e97469442dd72e8d/b160842c-1bd8-11ed-aacd-c6cc293aecae_red_label_1_lt.jpeg?w=600",
//     category: "Juice",
//     title: "JW Red Label",
//     price: 58.50,
//     type:"juice",
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id: 16,
//     image: "https://www.pagofruitjuice.co.uk/fileadmin/_processed_/3/3/csm_PAGO_Orange_ea0fac5b54.png",
//     category: "Juice",
//     title: "Pago orange juice",
//     price: 5.50,
//     type:"juice", 
//     discount:"Sale!",
//     count:1
//   },
//   {
//     id: 17,
//     image: "https://www.pagofruitjuice.co.uk/fileadmin/_processed_/0/a/csm_PAGO-Strawberry_61f34a61d9.png",
//     category: "Juice",
//     title: "Pago strawberry juice",
//     price: 5.50,
//     type:"juice", 
//     discount:"Sale!",
//     count:1
//   },
// ];
