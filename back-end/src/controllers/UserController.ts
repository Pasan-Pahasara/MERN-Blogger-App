import { Request, RequestHandler, Response } from "express";
import { User, IUser } from "../models/User";

export default class UserController { // UserController is the controller of the user
  registerUser: RequestHandler = async ( // registerUser is the function to register a user
    req: Request,
    res: Response
  ): Promise<Response> => { // Promise<Response> is the return type of the function
    //create operation
    try {
      const { email, password } = req.body; // destructuring assignment

      const existingUser = await User.findOne({ email }); // check if user with the same email already exists
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User with this email already exists" });
      }

      const newUser: IUser = new User({ email, password }); // create a new user

      const savedUser = await newUser.save(); // save() is used to save the database

      return res.status(201).json(savedUser); // return the response
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}
