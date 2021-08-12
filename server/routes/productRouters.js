const router = require("express").Router();
const Products = require('../models/productModels');
const auth = require('../middleware/auth');

//add products

router.route("/add").post((req,res)=>{

    
    const name = req.body.name;
    const description = req.body.description;
    const quantity = req.body.quantity;
    const user_id = req.body.user_id;

    const newProductModels = new Products({
        
        name,
        description,
        quantity,
        user_id
    })

    newProductModels.save().then(()=>{
        res.json("Product Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//retrive product data 
router.route("/retrieve").get((req,res)=>{

    Products.find().then((productRouters)=>{
        res.json(productRouters)
    }).catch((err)=>{
        console.log(err)
    })
}) 

//update product
router.route("/update/:id").put(async(req,res)=>{
    let productID = req.params.id;
    const {  name,description,quantity,user_id} = req.body;

    const updateProduct = {
        name,
        description,
        quantity,
        user_id
    }

    Products.findByIdAndUpdate(productID,updateProduct).then((UpdateLick)=>{
        res.json("Success");
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })
})


//delete product 
router.route("/delete/:id").delete(async(req,res)=>{
    let productID = req.params.id;

    await Products.findByIdAndDelete(productID).then(()=>{
        res.status(200).send({status: "Item Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete product", error: err.message});

    })
})

//get one product
router.route("/get/:id").get(async(req,res)=>{
    let productID = req.params.id;
    Products.findById(productID).then((productRouters)=>{
        res.json(productRouters)
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
})


module.exports = router;