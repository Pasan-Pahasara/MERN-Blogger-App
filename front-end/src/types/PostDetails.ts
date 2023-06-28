export type PostDetails = {
  _id: string;
  postList: PostDetails[];
  isClickedCreateNewPost: boolean;
  imageId: String;
  title: String;
  caption: String;
  description: String;
  date?: String;
  userName?: String;
  tags: String[];
  categoryId: string;
};
