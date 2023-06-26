import { Schema, model, Document } from "mongoose";

export interface IPostCategories extends Document {
  name: string;
}

const PostCategoriesSchema = new Schema<IPostCategories>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const PostCategories = model<IPostCategories>("PostCategories", PostCategoriesSchema);

export default PostCategories;
