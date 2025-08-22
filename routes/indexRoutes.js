const express = require('express');
const router = express();
const productSchema = require('../Models/Product-model');
const islogeedin = require('../middlewares/isLogeedIn');
const UserModel = require('../Models/User-model');
const ProductModel = require('../Models/Product-model');

router.get("/", function (req, res) {
    let error = req.flash("error");
    let message = req.flash("message")
    res.render("index", { message,error, loggedin: false ,showHeader: false });
  });

router.get('/shop' , islogeedin , async function(req,res){
  let products = await productSchema.find();
  res.render('shop', {products});
})

router.get("/cart", islogeedin, async (req, res) => {
  const user = await UserModel.findOne({ email: req.user.email }).populate(
    "cart.productId"
  ); 

  res.render("cart", { products: user.cart });
});


router.get("/addtocart/:id", islogeedin, async function (req, res) {
  const user = await UserModel.findOne({ email: req.user.email });
  const product = await ProductModel.findById(req.params.id);

  if (!product) return res.redirect("/shop");

  const cartItem = user.cart.find(
    (item) => item.productId.toString() === product._id.toString()
  );

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    user.cart.push({ productId: product._id, quantity: 1 });
  }

  await user.save();
  res.redirect("/cart");
});

module.exports = router;