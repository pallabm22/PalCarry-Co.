const express = require("express");
const router = express.Router();
let ownerModel = require("../Models/owner-model");

const bcrypt = require("bcrypt"); 

const createOwner = async (req, res) => {
  try {
    let { fullname, email, password, contact } = req.body;
    let owners = await ownerModel.find();
    if (owners.length > 0) {
      res.send({
        response: "Their can be only 1 owner",
      });
      return;
    } else {
      let createdOwner = await ownerModel.create({
        fullname,
        email,
        password,
        contact,
      });
      req.flash("success", "Welcome Admin!");
      return res.redirect("/login");
    }
  }
  catch (err) {
    res.send(err.message);
  }
};

const loginOwner= async (req, res) => {
  let { email, password } = req.body;
  try {
    let owner = await ownerModel.findOne({ email });
    if (!owner) {
      return res.status(401).send("Owner not found");
    }

    let isMatch = password === owner.password;
    if (!isMatch) {
      return res.status(401).send("Invalid password");
    }

    req.session.owner = owner;
    req.flash("success", "Welcome Admin!");
    return res.redirect("/owner/admin");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { loginOwner, createOwner };