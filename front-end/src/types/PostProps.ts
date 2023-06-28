export type PostProps = {
    // post props
    _id: string;
    imageId: string;
    title: string;
    caption: string;
    description: string;
    date: string;
    userName: string;
    tags: string[];
    categoryId: string;
    removePostFromList?: (postId: string) => void;
  };