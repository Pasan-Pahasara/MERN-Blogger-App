import { Schema, model } from "mongoose";

// start introducing properties
export interface IUser extends Document {
  avatar: String;
  name: String;
  email: String;
  password: String;
  verified: Boolean;
  verificationCode: String;
  admin: Boolean;
}
// end introducing properties


