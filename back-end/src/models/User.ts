import { Document, Schema, model } from "mongoose";

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

// start passed the properties object
const UserSchema = new Schema(
  {
    avatar: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      required: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
// end passed the properties object

export const User = model<IUser>("User", UserSchema);
