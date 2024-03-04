import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

export const Admin = mongoose.model("Admin", AdminSchema);
