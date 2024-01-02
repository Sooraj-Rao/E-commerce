import {
  LoginMessage,
  SignUpMessage,
} from "../../Constants/Messages/Message.js";
import User from "../../Models/User/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//User Registartion
export const SignUp = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.json({ error: true, message: SignUpMessage.AlreadyExist });
    }
    const newUser = new User({
      name,
      email,
      phone,
      password,
    });
    await newUser.save();
    return res.json({ error: false, message: SignUpMessage.Succesfull });
  } catch (error) {
    console.log("Regis Eror ", error);
    return res.json({ error: true, message: SignUpMessage.Failed });
  }
};

// User Login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUser = await User.findOne({ email });
    if (!isUser) {
      return res.json({ error: true, message: LoginMessage.DoesntExist });
    } else if (isUser.password != password) {
      return res.json({ error: true, message: LoginMessage.WrongPassword });
    }
    const secretKey = process.env.SECRET_KEY;
    const payload = {
      id: isUser._id,
      email: isUser.email,
      name: isUser.name,
    };
    const token = jwt.sign(payload, secretKey);
    return res.json({
      error: false,
      message: LoginMessage.Succesfull,
      token: token,
      user: { email: isUser.email, name: isUser.name ,phone:isUser.phone},
    });
  } catch (error) {
    console.log("Login Eror ", error);
    return res.json({ error: true, message: LoginMessage.Failed });
  }
};

// jwt.verify(token, secretKey, (err, decoded) => {
//   if (err) {
//     console.log("Invalid Token");
//   }
//   console.log(decoded);
// });
