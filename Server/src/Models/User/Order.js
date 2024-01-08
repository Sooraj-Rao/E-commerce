import mongoose from "mongoose";
const { Schema, model } = mongoose;

const AddressSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
});

const AmountSchema = new Schema({
  subtotal: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  shipping: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const orderSchema = new Schema(
  {
    date: {
      required: true,
      type: Date,
    },
    paymentId: {
      required: true,
      type: String,
    },
    addressInfo: {
      type: AddressSchema,
      required: true,
    },
    amountInfo: {
      type: AmountSchema,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    cart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = model("order", orderSchema);

export default Order;
