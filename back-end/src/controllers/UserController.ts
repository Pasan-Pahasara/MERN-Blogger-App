import { Request, RequestHandler, Response } from "express";
import { User, IUser } from "../models/User";

export default class UserController {
  // UserController is the controller of the user
  registerUser: RequestHandler = async (
    // registerUser is the function to register a user
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
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

  retrieveAllUsers: RequestHandler = async (
    // retrieveAllUsers is the function to retrieve all the users
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    //read operation
    try {
      let users = await User.find(); // find() is used to find the documents

      return res.status(200).json({ responseData: users });
    } catch (error: unknown) {
      // catch block is used to handle the errors
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  updateUser: RequestHandler = async (
    // updateUser is the function to update a user
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    //update operation
    try {
      const { id } = req.params; // id is the id of the user

      let updatedUser = await User.findByIdAndUpdate(id, req.body, {
        //find the user by ID and update
        new: true,
      });

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({
        message: "User updated successfully.!",
        responseData: updatedUser,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  deleteUser: RequestHandler = async (
    // deleteUser is the function to delete a user
    req: Request,
    res: Response
  ): Promise<Response> => {
    // Promise<Response> is the return type of the function
    //delete operation
    try {
      const { id } = req.params; // id is the id of the user

      let deletedUser = await User.findByIdAndDelete(id); // find the user by ID and delete

      if (!deletedUser) {
        // check whether the user exists or not
        return res.status(404).json({ message: "User not found" });
      }
      return res // return the response
        .status(200)
        .json({
          message: "User deleted successfully.!",
          responseData: deletedUser,
        });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };
}
