const mongoose = require('mongoose') ;

const UserSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  contact: Number,
  cart: [
    {
      productId:
      {type: mongoose.Schema.Types.ObjectId,
        ref: "productSchema"
      },
      quantity: { type: Number, default: 1 },
    },
  ],
  orders: {
    typeof: Array,
    default: [],
  },
  picture: String,
});

module.exports = mongoose.model("userModel" , UserSchema)
