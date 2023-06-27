import React, { useEffect, useState } from 'react';
import { ChangeEvent, Component, FormEvent } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Divider, TextField } from "@mui/material";
import { PostDetails } from "../../types/PostDetails";
import AdminLayout from "../admin/AdminLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "../../axios"

  // Create a custom theme with the desired TextField styles
  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px", // Define your own border radius
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1)", // Define your own box-shadow
            },
          },
        },
      },
    },
  });
  
const Profile = () => {

  const [postArray, setPostArray] = useState<PostDetails[]>([]);
  const [imageId, setImageId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [caption, setCaption] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [categoryId, setCategoryId] = useState<string>("");
  const [isClickedCreateNewPost, setIsClickedCreateNewPost] = useState<boolean>(false);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = () => {
    axios
      .get("post")
      .then((res) => {
        setPostArray(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  function handleClickCreateNewPost(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error("Function not implemented.");
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <AdminLayout>
    <div className="mt-20 py-6 px-32">
      <div className="w-full flex flex-col space-y-1">
        {!isClickedCreateNewPost ? (
          <>
            <div
              className="cursor-pointer w-full p-4 bg-purple-600 text-white rounded-ss-2xl rounded-ee-2xl rounded-t-lg rounded-b-lg flex justify-between items-center shadow-2xl"
              onClick={handleClickCreateNewPost}
            >
              <h6 className="uppercase font-Ubuntu font-bold">
                Create New Article
              </h6>
              <AddCircleIcon />
            </div>
            <div
              className="cursor-pointer p-8 bg-white text-slate-400 flex justify-center items-center space-x-3 rounded-ss-3xl rounded-ee-3xl rounded-t-lg  rounded-l-lg shadow-2xl"
              onClick={handleClickCreateNewPost}
            >
              <PostAddIcon />
              <h6 className="uppercase font-Ubuntu font-bold">
                Your New Article
              </h6>
            </div>
          </>
        ) : (
          <>
            <div
              className="cursor-pointer w-full p-4 bg-purple-600 text-white rounded-ss-2xl rounded-ee-2xl rounded-t-lg rounded-b-lg flex justify-between items-center"
              onClick={handleClickCreateNewPost}
            >
              <h6 className="uppercase font-Ubuntu font-bold">
                Discard Article
              </h6>
              <RemoveCircleIcon />
            </div>
            <div className="w-full cursor-pointer p-8 bg-white rounded-ss-3xl rounded-ee-3xl rounded-t-lg  rounded-l-lg text-slate-400 flex justify-center items-center space-x-3 shadow-2xl">
              <form
                className="flex flex-col space-y-3 w-full"
                onSubmit={handleSubmit}
              >
                <ThemeProvider theme={theme}>
                  <input
                    className="block w-full text-lg text-gray-900 border border-gray-300 rounded-r-xl cursor-pointer bg-gray-50 dark:text-gray-400  dark:placeholder-gray-600" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1)" }}
                    id="large_size"
                    type="file"
                  />

                  <TextField
                    label="Article Title"
                    type="text"
                    variant="outlined"
                    name="title"
                    placeholder="Enter Article title"
                    onChange={handleInputChange}
                    value={title}
                    fullWidth={true}
                    required
                  />

                  <TextField
                    label="Article Description"
                    type="text"
                    variant="outlined"
                    name="description"
                    placeholder="Enter Article Description"
                    value={description}
                    onChange={handleInputChange}
                    fullWidth={true}
                    multiline
                    minRows={5}
                    maxRows={Infinity}
                    required
                  />
                  <TextField
                    label="Date"
                    type="number"
                    variant="outlined"
                    name="hoursCount"
                    placeholder="Enter Date"
                    onChange={handleInputChange}
                    value={date}
                    fullWidth={true}
                  />
                  <TextField
                    label="User Name"
                    type="text"
                    variant="outlined"
                    placeholder="Enter User Name"
                    name="lecturerName"
                    onChange={handleInputChange}
                    value={userName}
                    fullWidth={true}
                  />
                </ThemeProvider>
                <button className="py-2 bg-purple-600 text-white rounded-2xl hover:bg-purple-700 transition-colors duration-300">
                  <h6 className="uppercase font-Ubuntu">Publish Post</h6>
                </button>
              </form>
            </div>
          </>
        )}
      </div>

      <Divider className="!my-5" />

      {/* {this.state.postList.map((post) => (
        <Post
          key={post._id}
          _id={post._id}
          image={post.image}
          title={post.title}
          description={post.description}
          date={post.date}
          userName={post.userName}
          removePostFromList={this.removePostFromList}
        />
      ))} */}
    </div>
  </AdminLayout>
  )
}

export default Profile;
