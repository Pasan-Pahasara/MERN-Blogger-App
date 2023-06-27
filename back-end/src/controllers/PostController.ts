import { RequestHandler, Request, Response } from "express";

export default class PostController {
  addPost: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    //create operation

    return res;
  };
}
