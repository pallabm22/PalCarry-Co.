const express = require("express");
const router = express.Router();
let ownerModel = require("../Models/owner-model");

const bcrypt = require("bcrypt"); 
const {loginOwner,createOwner} = require("../Controllers/authOwnerController");

router.get("/login", (req, res) => {
  res.render("ownerlogin");
});


router.post("/create", createOwner);

router.post("/login",loginOwner);




router.get("/admin", async (req, res) => {
  let success = req.flash("success") ;
    res.render('createproducts',{success});
  });

router.post("/", (req, res) => {
  res.send("Post route working");
});


module.exports = router;
