import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Nama harus diisi"],
    unique: [true, "Nama sudah digunakan"],
  },
  email: {
    type: String,
    required: [true, "Email harus diisi"],
    unique: [true, "Email sudah pernah didaftarkan"],
    validate: {
      validator: validator.isEmail,
      message: "Harus format Email",
    },
  },
  password: {
    type: String,
    required: [true, "Password harus diisi"],
    minLenght: [6, "Minimal harus 6 karakter"],
  },
  role: {
    type: String,
    enum: ["user", "owner"],
    default: "user",
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
