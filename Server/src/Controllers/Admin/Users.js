import { DeleteUserMsg, UserMsg } from "../../Constants/Messages/Message.js";
import User from "../../Models/User/userModel.js";

export const GetUser = async (req, res) => {
  try {
    const users = await User.find();
    return res.json({ error: false, message: UserMsg.success, data: users });
  } catch (error) {
    console.log(error);
    return res.json({ error: false, message: UserMsg.fail, data: null });
  }
};

export const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findByIdAndDelete(id);
    if (!users) {
      return res.json({ error: true, message: DeleteUserMsg.NoExist });
    }
    return res.json({ error: false, message: DeleteUserMsg.success });
  } catch (error) {
    console.log(error);
    return res.json({ error: true, message: DeleteUserMsg.fail });
  }
};
