import { Document,Schema, model } from "mongoose";

export interface IPost extends Document {
    title: String;
    caption: String;
    slug: String;
    body: String;
    photo: String;
    user: String;
    tags: String[];
    categories: String[];
}

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        caption: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        user: { 
            type: String,
            required: true,
        },
        tags: {
            type: Array<String>,
            required: true,
        },
        categories: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Post = model<IPost>("Post", PostSchema);
