import mongoose, { Schema } from "mongoose";

const signupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Signup = mongoose.models.Signup || mongoose.model("Signup", signupSchema);
export default Signup;
