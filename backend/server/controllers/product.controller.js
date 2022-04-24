var Product = require('../database-mongo/Product.model.js');

var add = function (req, res){
    let {title,description,image_url,quantite,user_id}=req.body
  
    Product.insertMany({title,description,image_url,quantite,user_id})
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
  }

  var getProducts =  (req , res) => {
    Product.find({})
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      res.send(err);
    });
    
  } ;
  ///////////
  var getProductsByUserId = function (req, res) {
    let {user_id}= req.params
    console.log(user_id)
    Product.find({user_id})
      .then((products) => {
        res.send(products);
      })
      .catch((err) => {
        res.send(err);
      });
  };

 var deleteProduct=function(req,res){
   let id=req.params.id
   Product.findByIdAndRemove(id).then(()=>{
     res.send('deleted')
   }).catch((err)=>{
     res.send(err)
   })
 }
 var updateProduct=function(req,res){
   let id=req.params.id
   let up=req.body
   Product.findByIdAndUpdate(id,up).then(()=>{
     res.send('updated')
   }).catch((err)=>{
     res.send(err)
   })
 }

module.exports = { add , getProducts, getProductsByUserId, deleteProduct, updateProduct };