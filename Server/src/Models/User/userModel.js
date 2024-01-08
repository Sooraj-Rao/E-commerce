import mongoose from "mongoose";
const { Schema, model } = mongoose;

const purchaseSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const userSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^\S+@\S+\.\S+$/,
    },
    phone: {
      required: true,
      type: Number,
    },
    password: {
      required: true,
      type: String,
    },
    purchaseHistory: [purchaseSchema],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
