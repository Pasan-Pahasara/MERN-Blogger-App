import { Schema, model } from "mongoose";

export interface IImage {
  // IImage is the interface of the image
  imageId: string;
  imageUrl: string;
}

const ImageSchema = new Schema(
  {
    // ImageSchema is the schema of the image
    imageId: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Image = model<IImage>("Image", ImageSchema);