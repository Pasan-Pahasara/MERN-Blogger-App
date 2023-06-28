import { FC, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import api from "../../axios";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";

type PostProps = {
  _id: String;
  imageId: String;
  title: String;
  caption: String;
  description: String;
  date?: String;
  userName?: String;
  tags: String[];
  categoryId: String;
  removePostFromList?: (postId: String) => void;
};

const deletePost = (postId: String, props: PostProps) => {
  api
    .delete(`post/${postId}`)
    .then((res) => {
      console.log(res);
      if (props.removePostFromList) {
        props.removePostFromList(postId);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const Post: FC<PostProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handlUpdateSelectedRows = () => {
    setOpen(true);
  };

  const theme = createTheme({
    // for textfield rounded corners and shadow style
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1)",
              marginBottom: "10px",
            },
          },
        },
      },
    },
  });

  return (
    <>
      <div className="cursor-pointer p-6 bg-white text-slate-600 space-x-3 rounded-2xl shadow-2xl mt-1">
        <h3 className="text-center font-bold font-Ubuntu">{props.title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 mt-2">
            {props.date && (
              <p>
                <strong>Date</strong> : {props.date}
              </p>
            )}
            {props.userName && (
              <p>
                <strong>User Name</strong> : {props.userName}
              </p>
            )}
            {props.categoryId && (
              <p>
                <strong>Category</strong> : {props.categoryId}
              </p>
            )}
            {props.tags && (
              <p>
                <strong>Tags</strong> : {props.tags.join(", ")}
              </p>
            )}
          </div>
          <img className="h-10 mt-2" alt="Image" />

          <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-6 justify-end">
            <button onClick={() => deletePost(props._id, props)}>
              <DeleteIcon style={{ color: "#e74c3c" }} />
            </button>
            <button onClick={() => handlUpdateSelectedRows()}>
              <EditIcon style={{ color: "#2ecc71" }} />
            </button>
          </div>
        </div>

        <h2 className="text-center font-semibold font-babylonica">
          {props.caption}
        </h2>
        <p className="flex justify-center items-center font-opensans">
          {props.description}
        </p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{ timeout: 500 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              width: "full",
              maxWidth: "sm",
              bgcolor: "background.paper",
              p: 2,
              borderRadius: "20px",
              boxShadow:
                "0 2px 4px rgba(0, 0, 0, 0.1), 0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="modal-content mx-3 md:flex-row mb-4">
              <ThemeProvider theme={theme}>
                <input
                  className="block w-full text-lg text-gray-900 border border-gray-300 rounded-r-xl cursor-pointer bg-gray-50 dark:text-gray-400  dark:placeholder-gray-600"
                  style={{marginBottom: "10px"}}
                  id="large_size"
                  type="file"
                />

                <TextField
                  label="Article Title"
                  type="text"
                  variant="outlined"
                  name="title"
                  placeholder="Enter Article title"
                  fullWidth
                  required
                />

                <TextField
                  label="Article Caption"
                  type="text"
                  variant="outlined"
                  name="caption"
                  placeholder="Enter Article Caption"
                  fullWidth
                  required
                />

                <TextField
                  label="Article Description"
                  type="text"
                  variant="outlined"
                  name="description"
                  placeholder="Enter Article Description"
                  fullWidth
                  multiline
                  minRows={5}
                  maxRows={Infinity}
                  required
                />

                <TextField
                  type="date"
                  variant="outlined"
                  name="date"
                  placeholder="Enter Date"
                  fullWidth
                  required
                />

                <TextField
                  label="User Name"
                  type="text"
                  variant="outlined"
                  placeholder="Enter User Name"
                  name="userName"
                  fullWidth
                  required
                />

                <TextField
                  label="Category"
                  type="text"
                  variant="outlined"
                  name="categoryName"
                  placeholder="Enter Category Name"
                  fullWidth
                  required
                />

                <TextField
                  label="Tags (Comma separated tags)"
                  type="text"
                  variant="outlined"
                  name="tags"
                  placeholder="Enter comma separated tags"
                  fullWidth
                  required
                />
              </ThemeProvider>
            </div>
            <div className="-mx-3 md:flex">
              <div className="md:w-full px-3 mb-6 md:mb-0">
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ borderRadius: "20px", backgroundColor: "#9333EA" }}
                  onClick={() => {
                    // Add your update post logic here
                  }}
                >
                  Update Post
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Post;
