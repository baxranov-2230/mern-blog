import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: true,
      required: true,
      unique: true,
    },
    email: {
      type: true,
      required: true,
      unique: true,
    },
    password: {
      type: true,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;